import path from 'node:path'
import asyncFs from 'node:fs/promises'
import { createWriteStream } from 'node:fs'
import PDFDocument from 'pdfkit'
import * as bookcarsTypes from ':bookcars-types'
import * as env from '../config/env.config'
import * as helper from './helper'
import * as logger from './logger'
import Counter from '../models/Counter'
import Invoice from '../models/Invoice'
import Setting from '../models/Setting'
import User from '../models/User'
import Car from '../models/Car'

/**
 * Allocate the next invoice number in a series.
 *
 * § 14 Abs. 4 Nr. 4 UStG requires a unique, sequentially assigned number. The
 * counter is incremented atomically, so concurrent checkouts cannot receive the
 * same number. Series are per issuer and per year, which keeps the sequence
 * identifiable while still being unbroken within its range.
 *
 * @async
 * @param {string} seriesKey identifies the issuer, e.g. "platform" or a supplier id
 * @param {string} prefix invoice number prefix, e.g. "RE"
 * @returns {Promise<string>}
 */
export const nextInvoiceNumber = async (seriesKey: string, prefix: string): Promise<string> => {
  const year = new Date().getFullYear()
  const counterId = `invoice-${seriesKey}-${year}`

  const counter = await Counter.findByIdAndUpdate(
    counterId,
    { $inc: { seq: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  )

  return `${prefix}-${year}-${String(counter.seq).padStart(5, '0')}`
}

/**
 * Format an amount for display on an invoice, always in German convention
 * (1.234,50) because the documents are issued under German tax law.
 *
 * @param {number} amount
 * @param {string} currency
 * @returns {string}
 */
const formatAmount = (amount: number, currency: string): string => {
  const formatted = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
  return `${formatted} ${currency}`
}

const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeZone: env.TIMEZONE }).format(date)

const formatDateTime = (date: Date): string =>
  new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeStyle: 'short', timeZone: env.TIMEZONE }).format(date)

/**
 * Render an invoice to a PDF file and return its filename.
 *
 * @async
 * @param {env.Invoice} invoice
 * @returns {Promise<string>}
 */
export const renderPdf = async (invoice: env.Invoice): Promise<string> => {
  await asyncFs.mkdir(env.CDN_INVOICES, { recursive: true })

  const filename = `${invoice.number}.pdf`
  const filepath = path.join(env.CDN_INVOICES, filename)

  const isCreditNote = invoice.type === bookcarsTypes.InvoiceType.CreditNote
  const { currency } = invoice
  const sign = isCreditNote ? -1 : 1

  await new Promise<void>((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 50 })
    const stream = createWriteStream(filepath)

    stream.on('finish', resolve)
    stream.on('error', reject)
    doc.on('error', reject)
    doc.pipe(stream)

    const { seller, buyer } = invoice

    // Sender line and recipient block
    doc.fontSize(8).fillColor('#555')
    doc.text([seller.name, seller.address].filter(Boolean).join(', '), 50, 60)

    doc.fontSize(11).fillColor('#000')
    doc.text(buyer.name, 50, 95)
    if (buyer.address) {
      doc.text(buyer.address)
    }

    // Issuer block, right aligned
    doc.fontSize(9).fillColor('#333')
    const issuerLines = [
      seller.name,
      seller.address,
      seller.email ? `E-Mail: ${seller.email}` : '',
      seller.phone ? `Telefon: ${seller.phone}` : '',
      seller.vatId ? `USt-IdNr.: ${seller.vatId}` : '',
      !seller.vatId && seller.taxNumber ? `Steuernummer: ${seller.taxNumber}` : '',
      seller.registerCourt && seller.registerNumber ? `${seller.registerCourt}, ${seller.registerNumber}` : '',
    ].filter(Boolean)
    doc.text(issuerLines.join('\n'), 320, 60, { width: 225, align: 'right' })

    // Title and metadata
    doc.fillColor('#000').fontSize(18)
    doc.text(isCreditNote ? 'Stornorechnung' : 'Rechnung', 50, 190)

    doc.fontSize(10)
    doc.text(`${isCreditNote ? 'Stornorechnungsnummer' : 'Rechnungsnummer'}: ${invoice.number}`, 50, 220)
    doc.text(`Rechnungsdatum: ${formatDate(invoice.issuedAt)}`)
    doc.text(`Leistungszeitraum: ${formatDateTime(invoice.serviceFrom)} - ${formatDateTime(invoice.serviceTo)}`)

    // Line items
    let y = 280
    doc.fontSize(10).fillColor('#000')
    doc.text('Beschreibung', 50, y)
    doc.text('Menge', 300, y, { width: 50, align: 'right' })
    doc.text('Netto', 360, y, { width: 80, align: 'right' })
    doc.text('Brutto', 450, y, { width: 95, align: 'right' })
    y += 15
    doc.moveTo(50, y).lineTo(545, y).strokeColor('#999').stroke()
    y += 10

    for (const item of invoice.lineItems) {
      doc.fontSize(10).fillColor('#000')
      doc.text(item.description, 50, y, { width: 240 })
      const rowHeight = Math.max(doc.heightOfString(item.description, { width: 240 }), 12)
      doc.text(String(item.quantity), 300, y, { width: 50, align: 'right' })
      doc.text(formatAmount(sign * item.net, currency), 360, y, { width: 80, align: 'right' })
      doc.text(formatAmount(sign * item.gross, currency), 450, y, { width: 95, align: 'right' })
      y += rowHeight + 8
    }

    // Totals
    y += 10
    doc.moveTo(300, y).lineTo(545, y).strokeColor('#999').stroke()
    y += 10

    doc.fontSize(10)
    doc.text('Nettobetrag', 300, y, { width: 140, align: 'right' })
    doc.text(formatAmount(sign * invoice.net, currency), 450, y, { width: 95, align: 'right' })
    y += 16

    doc.text(`zzgl. ${invoice.vatRate} % USt.`, 300, y, { width: 140, align: 'right' })
    doc.text(formatAmount(sign * invoice.vatAmount, currency), 450, y, { width: 95, align: 'right' })
    y += 16

    doc.fontSize(12)
    doc.text('Gesamtbetrag', 300, y, { width: 140, align: 'right' })
    doc.text(formatAmount(sign * invoice.gross, currency), 450, y, { width: 95, align: 'right' })
    y += 40

    doc.fontSize(9).fillColor('#333')
    if (invoice.vatRate === 0) {
      // A zero rate must be explained rather than silently omitted.
      doc.text('Steuerfreie bzw. nicht steuerbare Leistung.', 50, y, { width: 495 })
    } else {
      doc.text('Der Rechnungsbetrag enthält die ausgewiesene Umsatzsteuer.', 50, y, { width: 495 })
    }
    y += 20

    if (isCreditNote) {
      doc.text('Diese Stornorechnung storniert die zugehörige Rechnung vollständig.', 50, y, { width: 495 })
      y += 20
    }

    doc.text('Dieses Dokument wurde maschinell erstellt und ist ohne Unterschrift gültig.', 50, y, { width: 495 })

    doc.end()
  })

  return filename
}

/**
 * Resolve the party that issues the invoice.
 *
 * @async
 * @param {bookcarsTypes.InvoiceIssuer} issuer
 * @param {env.User} supplier
 * @returns {Promise<env.InvoiceParty>}
 */
const getSeller = (issuer: bookcarsTypes.InvoiceIssuer, supplier: env.User): env.InvoiceParty => {
  if (issuer === bookcarsTypes.InvoiceIssuer.Supplier) {
    return {
      name: supplier.fullName,
      address: supplier.invoiceAddress || supplier.location,
      vatId: supplier.vatId,
      taxNumber: supplier.taxNumber,
      registerCourt: supplier.registerCourt,
      registerNumber: supplier.registerNumber,
      email: supplier.email,
      phone: supplier.phone,
    }
  }

  return {
    name: env.COMPANY_NAME,
    address: env.COMPANY_ADDRESS,
    vatId: env.COMPANY_VAT_ID,
    taxNumber: env.COMPANY_TAX_NUMBER,
    registerCourt: env.COMPANY_REGISTER_COURT,
    registerNumber: env.COMPANY_REGISTER_NUMBER,
    email: env.COMPANY_EMAIL,
    phone: env.COMPANY_PHONE,
  }
}

/**
 * Issue an invoice for a paid booking.
 *
 * Idempotent: a booking that already has an invoice is left alone, so retries
 * and duplicate payment webhooks cannot burn invoice numbers.
 *
 * @async
 * @param {env.Booking} booking
 * @returns {Promise<env.Invoice | null>}
 */
export const issueForBooking = async (booking: env.Booking): Promise<env.Invoice | null> => {
  const currency = env.BASE_CURRENCY
  try {
    const existing = await Invoice.findOne({
      booking: booking._id,
      type: bookcarsTypes.InvoiceType.Invoice,
    })

    if (existing) {
      return existing
    }

    const settings = await Setting.findOne({})
    const issuer = settings?.invoiceIssuer || bookcarsTypes.InvoiceIssuer.Platform
    const prefix = settings?.invoiceNumberPrefix || 'RE'
    const vatRate = booking.vatRate ?? settings?.vatRate ?? 0

    const supplier = await User.findById(booking.supplier)
    const driver = await User.findById(booking.driver)
    const car = await Car.findById(booking.car)

    if (!supplier || !driver) {
      logger.error('[invoice.issueForBooking] Supplier or driver missing for booking', booking._id.toString())
      return null
    }

    const seller = getSeller(issuer, supplier)

    if (!seller.name || !seller.address || (!seller.vatId && !seller.taxNumber)) {
      // Issuing an invoice that is missing mandatory § 14 UStG details would
      // burn a number on an unusable document, so refuse instead.
      logger.error(
        '[invoice.issueForBooking] Issuer details incomplete; configure the company or supplier billing data before invoicing.',
        { issuer, booking: booking._id.toString() },
      )
      return null
    }

    const gross = booking.price || 0
    const { net, vat } = helper.getVatBreakdown(gross, vatRate)

    const seriesKey = issuer === bookcarsTypes.InvoiceIssuer.Supplier ? supplier._id.toString() : 'platform'
    const number = await nextInvoiceNumber(seriesKey, prefix)

    const invoice = new Invoice({
      number,
      type: bookcarsTypes.InvoiceType.Invoice,
      booking: booking._id,
      supplier: supplier._id,
      driver: driver._id,
      issuedAt: new Date(),
      currency,
      seller,
      buyer: {
        name: driver.fullName,
        address: driver.location,
        email: driver.email,
        phone: driver.phone,
      },
      lineItems: [{
        description: `Fahrzeuganmietung${car ? ` - ${car.name}` : ''}`,
        quantity: 1,
        net,
        vatRate,
        vatAmount: vat,
        gross,
      }],
      net,
      vatRate,
      vatAmount: vat,
      gross,
      serviceFrom: booking.from,
      serviceTo: booking.to,
    })

    await invoice.save()

    invoice.pdf = await renderPdf(invoice)
    await invoice.save()

    logger.info(`[invoice.issueForBooking] Issued ${number} for booking ${booking._id.toString()}`)
    return invoice
  } catch (err) {
    // Invoicing must never break the payment flow; log and carry on.
    logger.error('[invoice.issueForBooking] Failed to issue invoice', err)
    return null
  }
}

/**
 * Issue a credit note that reverses an existing invoice.
 *
 * @async
 * @param {env.Invoice} invoice
 * @returns {Promise<env.Invoice | null>}
 */
export const issueCreditNote = async (invoice: env.Invoice): Promise<env.Invoice | null> => {
  const existing = await Invoice.findOne({
    relatedInvoice: invoice._id,
    type: bookcarsTypes.InvoiceType.CreditNote,
  })

  if (existing) {
    return existing
  }

  const settings = await Setting.findOne({})
  const issuer = settings?.invoiceIssuer || bookcarsTypes.InvoiceIssuer.Platform
  const prefix = settings?.invoiceNumberPrefix || 'RE'
  const seriesKey = issuer === bookcarsTypes.InvoiceIssuer.Supplier ? invoice.supplier.toString() : 'platform'
  const number = await nextInvoiceNumber(seriesKey, prefix)

  const creditNote = new Invoice({
    number,
    type: bookcarsTypes.InvoiceType.CreditNote,
    booking: invoice.booking,
    supplier: invoice.supplier,
    driver: invoice.driver,
    issuedAt: new Date(),
    currency: invoice.currency,
    seller: invoice.seller,
    buyer: invoice.buyer,
    lineItems: invoice.lineItems,
    net: invoice.net,
    vatRate: invoice.vatRate,
    vatAmount: invoice.vatAmount,
    gross: invoice.gross,
    serviceFrom: invoice.serviceFrom,
    serviceTo: invoice.serviceTo,
    relatedInvoice: invoice._id,
  })

  await creditNote.save()

  creditNote.pdf = await renderPdf(creditNote)
  await creditNote.save()

  logger.info(`[invoice.issueCreditNote] Issued ${number} for invoice ${invoice.number}`)
  return creditNote
}

/**
 * Issue an invoice if the booking has actually been paid.
 *
 * Called from every payment-completion path. A deposit is only a partial
 * payment, so no invoice is issued for it yet.
 *
 * @async
 * @param {env.Booking} booking
 * @returns {Promise<void>}
 */
export const maybeIssueForBooking = async (booking: env.Booking): Promise<void> => {
  const paid = booking.status === bookcarsTypes.BookingStatus.Paid
    || booking.status === bookcarsTypes.BookingStatus.PaidInFull

  if (paid) {
    await issueForBooking(booking)
  }
}

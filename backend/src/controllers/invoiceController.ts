import path from 'node:path'
import { Request, Response } from 'express'
import * as bookcarsTypes from ':bookcars-types'
import i18n from '../lang/i18n'
import * as env from '../config/env.config'
import * as logger from '../utils/logger'
import * as helper from '../utils/helper'
import * as invoiceHelper from '../utils/invoiceHelper'
import Invoice from '../models/Invoice'
import User from '../models/User'

/**
 * List the signed-in driver's own invoices.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export const getMyInvoices = async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id

    if (!userId) {
      res.sendStatus(401)
      return
    }

    const invoices = await Invoice
      .find({ driver: userId })
      .sort({ issuedAt: -1 })
      .select('-__v')
      .lean()

    res.json(invoices)
  } catch (err) {
    logger.error(`[invoice.getMyInvoices] ${i18n.t('ERROR')}`, err)
    res.status(400).send(i18n.t('ERROR') + err)
  }
}

/**
 * Download an invoice PDF.
 *
 * Drivers may only download their own; admins may download any. Suppliers may
 * download the ones they issued.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export const download = async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id
    const { id } = req.params

    if (!userId) {
      res.sendStatus(401)
      return
    }

    const invoice = await Invoice.findById(id)

    if (!invoice) {
      res.sendStatus(204)
      return
    }

    const sessionUser = await User.findById(userId)

    const isOwner = invoice.driver.toString() === userId
    const isIssuingSupplier = invoice.supplier.toString() === userId
    const isAdmin = sessionUser?.type === bookcarsTypes.UserType.Admin

    if (!isOwner && !isAdmin && !isIssuingSupplier) {
      logger.error(`[invoice.download] Unauthorized attempt on invoice ${id} by user ${userId}`)
      res.sendStatus(403)
      return
    }

    if (!invoice.pdf) {
      res.sendStatus(204)
      return
    }

    const filepath = path.join(env.CDN_INVOICES, invoice.pdf)

    if (!(await helper.pathExists(filepath))) {
      logger.error(`[invoice.download] File missing for invoice ${invoice.number}`)
      res.sendStatus(204)
      return
    }

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `attachment; filename="${invoice.number}.pdf"`)
    res.sendFile(filepath)
  } catch (err) {
    logger.error(`[invoice.download] ${i18n.t('ERROR')}`, err)
    res.status(400).send(i18n.t('ERROR') + err)
  }
}

/**
 * List invoices for the admin panel.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export const getInvoices = async (req: Request, res: Response) => {
  try {
    const page = Number.parseInt(req.params.page, 10)
    const size = Number.parseInt(req.params.size, 10)

    const invoices = await Invoice
      .find({})
      .sort({ issuedAt: -1 })
      .skip((page - 1) * size)
      .limit(size)
      .select('-__v')
      .lean()

    res.json(invoices)
  } catch (err) {
    logger.error(`[invoice.getInvoices] ${i18n.t('ERROR')}`, err)
    res.status(400).send(i18n.t('ERROR') + err)
  }
}

/**
 * Issue a credit note reversing an invoice.
 *
 * Invoices are never edited or deleted; a correction is always a new document.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export const createCreditNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const invoice = await Invoice.findById(id)

    if (!invoice) {
      res.sendStatus(204)
      return
    }

    if (invoice.type === bookcarsTypes.InvoiceType.CreditNote) {
      res.status(400).send('Cannot issue a credit note for a credit note')
      return
    }

    const creditNote = await invoiceHelper.issueCreditNote(invoice)

    if (!creditNote) {
      res.sendStatus(400)
      return
    }

    res.json(creditNote)
  } catch (err) {
    logger.error(`[invoice.createCreditNote] ${i18n.t('ERROR')}`, err)
    res.status(400).send(i18n.t('ERROR') + err)
  }
}

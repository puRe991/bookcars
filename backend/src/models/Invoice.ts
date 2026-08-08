import { Schema, model } from 'mongoose'
import * as bookcarsTypes from ':bookcars-types'
import * as env from '../config/env.config'

const partySchema = new Schema<env.InvoiceParty>(
  {
    name: { type: String, required: true },
    address: { type: String },
    vatId: { type: String },
    taxNumber: { type: String },
    registerCourt: { type: String },
    registerNumber: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  { _id: false },
)

const lineItemSchema = new Schema<env.InvoiceLineItem>(
  {
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    net: { type: Number, required: true },
    vatRate: { type: Number, required: true },
    vatAmount: { type: Number, required: true },
    gross: { type: Number, required: true },
  },
  { _id: false },
)

/**
 * Issued invoice or credit note.
 *
 * Invoices are append-only: every field except `pdf` is marked immutable, so
 * mongoose drops any attempt to change an issued document. `pdf` stays writable
 * only because the file is rendered immediately after the record is created.
 *
 * Seller and buyer details are stored as snapshots rather than references, so
 * that a later change to a user or supplier record cannot alter a document that
 * has already been issued. A mistake is corrected by issuing a credit note,
 * never by editing or deleting the original - that is what § 14 UStG and the
 * GoBD principles require.
 */
const invoiceSchema = new Schema<env.Invoice>(
  {
    number: {
      type: String,
      required: true,
      unique: true,
      index: true,
      immutable: true,
    },
    type: {
      type: String,
      enum: [bookcarsTypes.InvoiceType.Invoice, bookcarsTypes.InvoiceType.CreditNote],
      default: bookcarsTypes.InvoiceType.Invoice,
      immutable: true,
    },
    booking: {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
      required: true,
      index: true,
      immutable: true,
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
      immutable: true,
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
      immutable: true,
    },
    issuedAt: {
      type: Date,
      required: true,
      immutable: true,
    },
    currency: {
      type: String,
      required: true,
      immutable: true,
    },
    seller: {
      type: partySchema,
      required: true,
      immutable: true,
    },
    buyer: {
      type: partySchema,
      required: true,
      immutable: true,
    },
    lineItems: {
      type: [lineItemSchema],
      default: [],
      immutable: true,
    },
    net: { type: Number, required: true, immutable: true },
    vatRate: { type: Number, required: true, immutable: true },
    vatAmount: { type: Number, required: true, immutable: true },
    gross: { type: Number, required: true, immutable: true },
    serviceFrom: { type: Date, required: true, immutable: true },
    serviceTo: { type: Date, required: true, immutable: true },
    pdf: { type: String },
    relatedInvoice: {
      type: Schema.Types.ObjectId,
      ref: 'Invoice',
      immutable: true,
    },
  },
  {
    timestamps: true,
    strict: true,
    collection: 'Invoice',
  },
)

const Invoice = model<env.Invoice>('Invoice', invoiceSchema)

export default Invoice

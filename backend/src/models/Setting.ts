import { Schema, model } from 'mongoose'
import * as bookcarsTypes from ':bookcars-types'
import * as env from '../config/env.config'

const settingSchema = new Schema<env.Setting>({
  minPickupHours: {
    type: Number,
    default: 1,
    min: 1,
  },
  minRentalHours: {
    type: Number,
    default: 1,
    min: 1,
  },
  minPickupDropoffHour: {
    type: Number,
    default: 0,
    min: 0,
    max: 23,
  },
  maxPickupDropoffHour: {
    type: Number,
    default: 23,
    min: 0,
    max: 23,
  },
  //
  // VAT rate in percent. Prices are stored and charged gross, so this only
  // controls how the VAT share is disclosed. Defaults to the German rate.
  //
  vatRate: {
    type: Number,
    default: 19,
    min: 0,
    max: 100,
  },
  //
  // Who issues invoices: the platform operator or the individual supplier.
  //
  invoiceIssuer: {
    type: String,
    enum: [bookcarsTypes.InvoiceIssuer.Platform, bookcarsTypes.InvoiceIssuer.Supplier],
    default: bookcarsTypes.InvoiceIssuer.Platform,
  },
  invoiceNumberPrefix: {
    type: String,
    default: 'RE',
    trim: true,
  },
}, {
  timestamps: true,
  strict: true,
  collection: 'Setting',
})

const Setting = model<env.Setting>('Setting', settingSchema)

export default Setting

import { Schema, model } from 'mongoose'
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
}, {
  timestamps: true,
  strict: true,
  collection: 'Setting',
})

const Setting = model<env.Setting>('Setting', settingSchema)

export default Setting

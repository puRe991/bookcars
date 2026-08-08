import { Schema, model } from 'mongoose'
import * as env from '../config/env.config'

/**
 * Atomic sequence counter.
 *
 * Used for invoice numbering, where § 14 UStG requires numbers to be unique and
 * issued in an unbroken sequence. `_id` is the series key, so a single findOne
 * AndUpdate with $inc hands out numbers atomically even under concurrency.
 */
const counterSchema = new Schema<env.Counter>(
  {
    _id: {
      type: String,
      required: true,
    },
    seq: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    strict: true,
    collection: 'Counter',
    _id: false,
  },
)

const Counter = model<env.Counter>('Counter', counterSchema)

export default Counter

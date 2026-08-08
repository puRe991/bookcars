import validator from 'validator'
import { Schema, model } from 'mongoose'
import * as env from '../config/env.config'

export const PENDING_SUBSCRIPTION_EXPIRE_AT_INDEX_NAME = 'pendingExpireAt'

/**
 * Newsletter subscription with double opt-in.
 *
 * A record is created in the unconfirmed state and only counts as a valid
 * subscription once the recipient has followed the confirmation link. The
 * confirmation timestamp and IP are kept as proof of consent, which is what
 * German case law expects of a double opt-in.
 */
const newsletterSubscriptionSchema = new Schema<env.NewsletterSubscription>(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      validate: [validator.isEmail, 'is not valid'],
      index: true,
      trim: true,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      required: [true, "can't be blank"],
      index: true,
    },
    confirmedAt: {
      type: Date,
    },
    confirmationIp: {
      type: String,
    },
    pendingExpireAt: {
      //
      // Unconfirmed subscriptions are removed automatically so that addresses
      // nobody confirmed do not linger. Cleared once the address is confirmed.
      //
      type: Date,
      default: Date.now,
      index: {
        name: PENDING_SUBSCRIPTION_EXPIRE_AT_INDEX_NAME,
        expireAfterSeconds: env.NEWSLETTER_CONFIRMATION_EXPIRE_AT,
        background: true,
      },
    },
  },
  {
    timestamps: true,
    strict: true,
    collection: 'NewsletterSubscription',
  },
)

const NewsletterSubscription = model<env.NewsletterSubscription>('NewsletterSubscription', newsletterSubscriptionSchema)

export default NewsletterSubscription

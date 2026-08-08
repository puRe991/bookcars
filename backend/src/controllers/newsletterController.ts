import { Request, Response } from 'express'
import { nanoid } from 'nanoid'
import validator from 'validator'
import * as bookcarsTypes from ':bookcars-types'
import i18n from '../lang/i18n'
import * as env from '../config/env.config'
import * as logger from '../utils/logger'
import * as helper from '../utils/helper'
import * as mailHelper from '../utils/mailHelper'
import NewsletterSubscription from '../models/NewsletterSubscription'

/**
 * Request a newsletter subscription (double opt-in, step 1).
 *
 * Creates or refreshes an unconfirmed subscription and emails a confirmation
 * link. The address is not subscribed until that link is followed.
 *
 * The response is deliberately identical whether or not the address is already
 * subscribed, so that the endpoint cannot be used to probe who is on the list.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export const subscribe = async (req: Request, res: Response) => {
  try {
    const { email }: bookcarsTypes.NewsletterSubscribePayload = req.body

    if (!email || !validator.isEmail(email)) {
      res.status(400).send('Invalid email address')
      return
    }

    const existing = await NewsletterSubscription.findOne({ email: email.toLowerCase() })

    if (existing?.confirmed) {
      // Already subscribed: do not send anything, but report success.
      res.sendStatus(200)
      return
    }

    const token = nanoid(32)

    if (existing) {
      existing.token = token
      existing.pendingExpireAt = new Date()
      await existing.save()
    } else {
      await new NewsletterSubscription({ email: email.toLowerCase(), token }).save()
    }

    const confirmUrl = `${helper.trimEnd(env.FRONTEND_HOST, '/')}/newsletter-confirm?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`

    const mailOptions = {
      from: env.SMTP_FROM,
      to: email,
      subject: i18n.t('NEWSLETTER_CONFIRM_SUBJECT'),
      html:
        `<p>${i18n.t('NEWSLETTER_CONFIRM_INTRO')}<br><br>`
        + `${i18n.t('NEWSLETTER_CONFIRM_LINK')}<br>`
        + `<a href="${confirmUrl}">${confirmUrl}</a><br><br>`
        + `${i18n.t('NEWSLETTER_CONFIRM_IGNORE')}<br><br>`
        + `${i18n.t('REGARDS')}<br></p>`,
    }

    await mailHelper.sendMail(mailOptions)

    res.sendStatus(200)
  } catch (err) {
    logger.error(`[newsletter.subscribe] ${i18n.t('ERROR')}`, err)
    res.status(400).send(i18n.t('ERROR') + err)
  }
}

/**
 * Confirm a newsletter subscription (double opt-in, step 2).
 *
 * Records when and from which IP the confirmation came, as proof of consent.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export const confirm = async (req: Request, res: Response) => {
  try {
    const { email, token } = req.params

    const subscription = await NewsletterSubscription.findOne({ email: email.toLowerCase(), token })

    if (!subscription) {
      res.sendStatus(204)
      return
    }

    if (!subscription.confirmed) {
      subscription.confirmed = true
      subscription.confirmedAt = new Date()
      subscription.confirmationIp = req.ip
      // Clearing this removes the record from the pending-expiry index.
      subscription.pendingExpireAt = undefined
      await subscription.save()
    }

    res.sendStatus(200)
  } catch (err) {
    logger.error(`[newsletter.confirm] ${i18n.t('ERROR')}`, err)
    res.status(400).send(i18n.t('ERROR') + err)
  }
}

/**
 * Unsubscribe from the newsletter.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export const unsubscribe = async (req: Request, res: Response) => {
  try {
    const { email, token } = req.params

    await NewsletterSubscription.deleteOne({ email: email.toLowerCase(), token })

    res.sendStatus(200)
  } catch (err) {
    logger.error(`[newsletter.unsubscribe] ${i18n.t('ERROR')}`, err)
    res.status(400).send(i18n.t('ERROR') + err)
  }
}

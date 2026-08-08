/**
 * Cookie consent state.
 *
 * Under § 25 TTDSG, anything beyond strictly necessary storage requires prior
 * opt-in. Consent is therefore denied until the visitor actively grants it, and
 * nothing here is written to storage before a decision is made.
 */

const STORAGE_KEY = 'bc-cookie-consent'
const CHANGE_EVENT = 'bc-cookie-consent-change'

/**
 * Consent version. Bump this when the categories or their meaning change so
 * that visitors are asked again instead of silently keeping a stale decision.
 */
const CONSENT_VERSION = 1

export interface CookieConsent {
  version: number
  analytics: boolean
  decidedAt: string
}

/**
 * Read the stored consent decision.
 *
 * @returns {CookieConsent | null} null when no valid decision has been recorded yet
 */
export const getConsent = (): CookieConsent | null => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw) as Partial<CookieConsent>
    if (parsed.version !== CONSENT_VERSION || typeof parsed.analytics !== 'boolean') {
      return null
    }

    return parsed as CookieConsent
  } catch {
    // Corrupted or unavailable storage is treated as "no decision yet".
    return null
  }
}

/**
 * Whether the visitor has already made a decision.
 *
 * @returns {boolean}
 */
export const hasDecision = (): boolean => getConsent() !== null

/**
 * Whether analytics storage is allowed.
 *
 * @returns {boolean}
 */
export const analyticsAllowed = (): boolean => getConsent()?.analytics === true

/**
 * Record a consent decision and notify listeners.
 *
 * @param {boolean} analytics
 */
export const setConsent = (analytics: boolean) => {
  if (typeof window === 'undefined') {
    return
  }

  const consent: CookieConsent = {
    version: CONSENT_VERSION,
    analytics,
    decidedAt: new Date().toISOString(),
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  } catch {
    // Storage may be unavailable (private mode, quota). The decision then only
    // applies to the current page view, which is the privacy-safe outcome.
  }

  window.dispatchEvent(new CustomEvent(CHANGE_EVENT))
}

/**
 * Subscribe to consent changes.
 *
 * @param {() => void} listener
 * @returns {() => void} unsubscribe
 */
export const onConsentChange = (listener: () => void): (() => void) => {
  if (typeof window === 'undefined') {
    return () => { }
  }

  window.addEventListener(CHANGE_EVENT, listener)
  return () => window.removeEventListener(CHANGE_EVENT, listener)
}

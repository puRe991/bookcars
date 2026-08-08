import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { strings } from '@/lang/cookie-consent'
import { hasDecision, setConsent } from '@/utils/cookieConsent'

import '@/assets/css/cookie-consent.css'

/**
 * Opt-in cookie banner.
 *
 * Rendered until the visitor makes a decision. Declining is as easy as
 * accepting: both are single, equally prominent buttons.
 */
const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Read storage after mount so server-rendered/prerendered markup stays stable.
    setVisible(!hasDecision())
  }, [])

  if (!visible) {
    return null
  }

  const decide = (analytics: boolean) => {
    setConsent(analytics)
    setVisible(false)
  }

  return (
    <div className="cookie-consent" role="dialog" aria-modal="false" aria-labelledby="cookie-consent-title">
      <div className="cookie-consent-body">
        <h2 id="cookie-consent-title">{strings.TITLE}</h2>
        <p>{strings.TEXT}</p>
        <ul className="cookie-consent-links">
          <li><Link to="/cookie-policy">{strings.COOKIE_POLICY}</Link></li>
          <li><Link to="/privacy">{strings.PRIVACY_POLICY}</Link></li>
          <li><Link to="/impressum">{strings.IMPRESSUM}</Link></li>
        </ul>
      </div>
      <div className="cookie-consent-actions">
        <Button variant="outlined" className="btn-secondary" onClick={() => decide(false)}>
          {strings.ESSENTIAL_ONLY}
        </Button>
        <Button variant="contained" className="btn-primary" onClick={() => decide(true)}>
          {strings.ACCEPT_ALL}
        </Button>
      </div>
    </div>
  )
}

export default CookieConsent

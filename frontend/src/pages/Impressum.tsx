import React from 'react'
import { strings } from '@/lang/impressum'
import env from '@/config/env.config'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'

import '@/assets/css/impressum.css'

interface Entry {
  label: string
  value: string
}

const Impressum = () => {
  const onLoad = () => { }

  const company = env.COMPANY

  const provider: Entry[] = [
    { label: strings.REPRESENTATIVE, value: company.REPRESENTATIVE },
    { label: strings.PHONE, value: company.PHONE },
    { label: strings.EMAIL, value: env.CONTACT_EMAIL },
    { label: strings.REGISTER_COURT, value: company.REGISTER_COURT },
    { label: strings.REGISTER_NUMBER, value: company.REGISTER_NUMBER },
    { label: strings.VAT_ID, value: company.VAT_ID },
    { label: strings.SUPERVISORY_AUTHORITY, value: company.SUPERVISORY_AUTHORITY },
    { label: strings.CONTENT_RESPONSIBLE, value: company.CONTENT_RESPONSIBLE },
  ]

  // The supervisory authority only applies to licensed trades, so it is not counted as missing.
  const incomplete = !company.NAME
    || !company.ADDRESS
    || provider.some((entry) => entry.label !== strings.SUPERVISORY_AUTHORITY && !entry.value)

  const renderValue = (value: string) => (
    value
      ? <span className="value">{value}</span>
      : <span className="value missing">{strings.NOT_CONFIGURED}</span>
  )

  return (
    <Layout onLoad={onLoad} strict={false}>
      <div className="impressum">
        <h1>{strings.TITLE}</h1>

        {incomplete && <div className="impressum-warning">{strings.INCOMPLETE_WARNING}</div>}

        <section>
          <h2>{strings.PROVIDER}</h2>
          <p className="company-name">{company.NAME || strings.NOT_CONFIGURED}</p>
          <p className="company-address">{company.ADDRESS || strings.NOT_CONFIGURED}</p>
        </section>

        <section>
          <h2>{strings.CONTACT}</h2>
          <dl>
            {provider.map((entry) => (
              <React.Fragment key={entry.label}>
                <dt>{entry.label}</dt>
                <dd>{renderValue(entry.value)}</dd>
              </React.Fragment>
            ))}
          </dl>
        </section>

        <section>
          <h2>{strings.DISPUTE_TITLE}</h2>
          <p className="dispute">{strings.DISPUTE_TEXT}</p>
        </section>
      </div>
      <Footer />
    </Layout>
  )
}

export default Impressum

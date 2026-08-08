import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { strings } from '@/lang/newsletter-form'
import { strings as commonStrings } from '@/lang/common'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'
import * as UserService from '@/services/UserService'

import '@/assets/css/newsletter-confirm.css'

const NewsletterConfirm = () => {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<'pending' | 'confirmed' | 'error'>('pending')

  const email = searchParams.get('email')
  const token = searchParams.get('token')

  useEffect(() => {
    const confirm = async () => {
      if (!email || !token) {
        setStatus('error')
        return
      }

      try {
        const res = await UserService.confirmNewsletter(email, token)
        // 204 means no matching pending subscription, e.g. an expired link.
        setStatus(res === 200 ? 'confirmed' : 'error')
      } catch {
        setStatus('error')
      }
    }

    confirm()
  }, [email, token])

  const onLoad = () => { }

  return (
    <Layout onLoad={onLoad} strict={false}>
      <div className="newsletter-confirm">
        <h1>{strings.CONFIRM_TITLE}</h1>
        {status === 'pending' && <p>{commonStrings.PLEASE_WAIT}</p>}
        {status === 'confirmed' && <p>{strings.CONFIRM_SUCCESS}</p>}
        {status === 'error' && <p className="error">{strings.CONFIRM_ERROR}</p>}
      </div>
      <Footer />
    </Layout>
  )
}

export default NewsletterConfirm

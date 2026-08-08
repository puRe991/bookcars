import React from 'react'
import { strings } from '@/lang/withdrawal'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'

import '@/assets/css/withdrawal.css'

const Withdrawal = () => {
  const onLoad = () => { }

  return (
    <Layout onLoad={onLoad} strict={false}>
      <div className="withdrawal">
        <h1>{strings.TITLE}</h1>
        <p>{strings.CONTENT}</p>
      </div>
      <Footer />
    </Layout>
  )
}

export default Withdrawal

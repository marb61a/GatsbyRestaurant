import React from 'react'
import SEO from '../components/seo'

import Layout from '../components/layout'
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/contactBcg.jpeg'

export default function about() {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageHeader img={img}>
        <Banner title="contact us" subtitle="let's get in touch" />
      </PageHeader>
    </Layout>
  )
}
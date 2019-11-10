import React from 'react'
import SEO from '../components/seo'

import Layout from '../components/layout'
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'

export default function about() {
  return(
    <Layout>
      <SEO 
        title="About"
      />
      <PageHeader img={img}>
        <Banner title="cabout us" subtitle="a little bit about us" />
      </PageHeader>
    </Layout>
  )
}

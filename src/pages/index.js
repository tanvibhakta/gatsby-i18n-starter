import React from 'react'
import { graphql } from 'gatsby'

import LangLink from '../components/lang-link'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <h4>{data.site.siteMetadata.title}</h4>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <LangLink to="/page-2/">Go to page 2</LangLink>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`
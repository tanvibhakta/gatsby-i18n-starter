import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1>{data.allMarkdownRemark.edges.node.frontmatter.title}</h1>
    <p>Hello</p>
</Layout>
)
 

export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
        }
        rawMarkdownBody
      }
    }
  }
}
`
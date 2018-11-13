import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Link } from 'gatsby';

export default ({ data }) => (
    <Layout>
      <h2>{data.allMarkdownRemark.edges[1].node.frontmatter.title}</h2>
      <p dir='rtl'>{data.allMarkdownRemark.edges[2].node.rawMarkdownBody}</p>
      <Link to='/'> 
        <p>{window.location.href}</p>
      </Link>
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
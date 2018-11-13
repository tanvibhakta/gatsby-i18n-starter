import React from 'react'
import { graphql } from 'gatsby';

export default ({ data }) => (
  <h1>{data.site.siteMetadata.title}</h1>
)

export const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`
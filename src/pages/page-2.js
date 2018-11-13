import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby';
import MarkdownRenderer from '../components/markdownrenderer';

export default ({ data }) => (
    <Layout>
      <MarkdownRenderer lang='2' />
      <Link to='/'> 
        <p>{window.location.href}</p>
      </Link>
  </Layout>
  )



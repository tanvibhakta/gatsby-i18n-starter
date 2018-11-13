import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby';
import MarkdownRenderer from '../components/markdownrenderer';

export default ({ data }) => (
    <Layout>
      {/* TODO: refactor to get what current language is (from provider or getlang?) */}
      <MarkdownRenderer lang='2' />
      <Link to='/'> 
        <p>{window.location.href}</p>
      </Link>
  </Layout>
  )



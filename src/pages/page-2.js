import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby';
import MarkdownRenderer from '../components/markdownrenderer';
import LanguageContext from '../components/langprovider';

export default ({ data }) => (
    <Layout>
      {/* TODO: refactor to get what current language is (from provider or getlang?) */}
      <LanguageContext.Consumer>
        {
          ({ lang }) => <MarkdownRenderer lang={lang} />
        }
      </LanguageContext.Consumer>
      <Link to='/'> 
        <p>{window.location.href}</p>
      </Link>
  </Layout>
  )



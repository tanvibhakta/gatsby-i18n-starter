import React from 'react'

import Layout from '../components/layout'
import LangLink from '../components/lang-link'
import MarkdownRenderer from '../components/markdown-renderer';
import { LanguageConsumer } from '../contexts/language-context'

export default ({ data }) => (
    <Layout>
          {/* // BUG: default context is not being given to the consumer */}
      <LanguageConsumer> 
        {({ lang }) => (
          <>
            <LangLink lang={lang} to='/'>{lang}</LangLink>
            <MarkdownRenderer/>
          </>  
         )} 
      </LanguageConsumer>
      
    </Layout>
  )



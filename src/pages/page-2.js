import React from 'react'

import Layout from '../components/layout'
import LangLink from '../components/langlink'
import MarkdownRenderer from '../components/markdownrenderer';
import { Consumer } from '../context/createContext'

export default ({ data }) => (
    <Layout>
          {/* // BUG: default context is not being given to the consumer */}
      <Consumer> 
        {({ lang }) => (
          <>
            <LangLink lang={lang} to='/'>{lang}</LangLink>
            <MarkdownRenderer/>
          </>  
         )} 
      </Consumer>
      
    </Layout>
  )



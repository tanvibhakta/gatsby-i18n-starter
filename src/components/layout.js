import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import LangSwitcher from './lang-switcher'
import { LanguageConsumer } from '../contexts/language-context'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <LanguageConsumer>
          {({ lang }) => (
            <Helmet>
              {/*  add options to 'ar' to include all rtl languages */}
              <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
          </Helmet>
          )}
        </LanguageConsumer>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            <LangSwitcher />
            {children}
          </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

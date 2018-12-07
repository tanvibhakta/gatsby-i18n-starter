import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import LangLink from './lang-link'
import { LanguageConsumer } from '../contexts/language-context'
//This component allows you to pick from the languages you are supporting.

const LangSwitcher = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            languages
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.site.siteMetadata.languages.map(lang => (
          <>
            <LangLink lang={lang} to={window.location.pathname}>
              {lang}
            </LangLink>
            <LanguageConsumer>
              {/* creates a list of languages from the config file */}
              {({ langList }) => {
                var temp = langList.push({ lang })
              }}
            </LanguageConsumer>
          </>
        ))}
      </div>
    )}
  />
)

export default LangSwitcher

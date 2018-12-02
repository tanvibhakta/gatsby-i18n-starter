import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import LangLink from './langlink';

const LangSwitcher = () => (
    <StaticQuery query={graphql`
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
        {data.site.siteMetadata.languages.map((lang) => (
         <LangLink lang={lang} to={window.location.pathname}>{lang}</LangLink>
         ))}
      </div>
    )}
    />
)

export default LangSwitcher
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { LanguageConsumer } from '../contexts/language-context'

//TODO: reformat query to find file on basis of language/
//Maybe adding a filter to the query based on file structure?

//  Everything would have been hunky dory if the nodes were created
//  in the order of declaration of the languages. Unfortunately
//  that is not how any of this works. :(
const MarkdownRenderer = () => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => (
        <LanguageConsumer>
          {({ langIndex }) => {
            console.log(langIndex)
            return <p>{data.allMarkdownRemark.edges[3].node.rawMarkdownBody}</p>
          }}
        </LanguageConsumer>
      )}
    />
  )
}

export default MarkdownRenderer

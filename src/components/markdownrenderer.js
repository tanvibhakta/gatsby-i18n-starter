import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import { Consumer } from '../context/createContext'

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
        <Consumer>
          {({ langIndex }) => {
            console.log(langIndex)
            return <p>{data.allMarkdownRemark.edges[3].node.rawMarkdownBody}</p>
          }}
        </Consumer>
      )}
    />
  )
}

export default MarkdownRenderer

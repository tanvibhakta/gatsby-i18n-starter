import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

const MarkdownRenderer = props => {
    let lang = props.lang
    return (
        //TODO: reformat query to find file on basis of language/
        //Maybe adding a filter to the query based on file structure?
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
                    <p>{data.allMarkdownRemark.edges[lang].node.rawMarkdownBody}</p>
            )}
        />

    )
}
    

export default MarkdownRenderer
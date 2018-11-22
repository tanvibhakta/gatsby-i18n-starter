/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Take the pages from src/pages and generate pages for all locales, e.g. /blog and /en/blog
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
            {
                site {
                    siteMetadata {
                        languages
                    }
                }

                allSitePage {
                    edges {
                        node {
                            path
                        }
                    }
                }   
            }
        `).then(result => {
            result.data.site.siteMetadata.languages.map((language) => {
                result.data.allSitePage.edges.map(({ node }) => {
                    createPage({
                        path: '/' + language + node.path,
                        component: path.resolve(`./src/components/layout.js`),
                        context: {
                            language: language,
                        }, 
                    })
                })
            });
        })
        )
        
    })
} 
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Take the pages from src/pages and generate pages for all locales, e.g. /blog and /en/blog
const langList = [];
const nodeList = [];

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
                langList.push(language)
                console.log(langList);
                
                result.data.allSitePage.edges.map(({ node }) => {
                    nodeList.push(node)
                    console.log(nodeList);
                    
                })
            });
        })
        )
    })
} 

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    return new Promise(resolve => {
      const oldPage = Object.assign({}, page)
      
      // Add all languages from the list
      langList.forEach( (language) => {
          nodeList.forEach( (node) => {
              page.path = '/' + language + node.path;
              console.log(page.path);
              
          })
      })

      if (page.path !== oldPage.path) {
        // Replace new page with old page
        deletePage(oldPage)
        createPage(page)
      }
      resolve()
    })
  }
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Take the pages from src/pages and generate pages for all locales, e.g. /blog and /en/blog
const langList = []

exports.createPages = ({ graphql }) => {
  return new Promise(resolve => {
    resolve(
      graphql(`
        {
          site {
            siteMetadata {
              languages
            }
          }
        }
      `).then(result => {
        result.data.site.siteMetadata.languages.map(language => {
          //create the list of languages for use during onCreatePage
          langList.push(language)
          console.log(langList)
        })
      })
    )
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  return new Promise(resolve => {
    const oldPage = Object.assign({}, page)

    // Add all languages from the list
    var ogpath = page.path
    langList.forEach(language => {
      if (page.path != '/dev-404-page/') {
        console.log('BEFORE ----' + page.path)
        page.path = '/' + language + ogpath
        createPage(page)
        console.log('AFTER ----- ' + page.path)
      }
    })
    if (page.path != '/dev-404-page/') {
      deletePage(oldPage)
    }
    resolve()
  })
}

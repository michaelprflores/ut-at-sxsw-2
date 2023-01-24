/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

const redirects = require("./redirects.json")

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  redirects.forEach(redirect => {
    createRedirect({
      fromPath: redirect.from,
      toPath: redirect.to,
    })
  })
}

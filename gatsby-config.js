/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `University of TEXAS at SXSW`,
    description: `Experience Spring Fest ATX as a Longhorn. Check out the various sessions presented by our outstanding students, faculty and alumni to discover how we are changing the world.`,
    author: `UT UMAC`,
    siteUrl: `https://sxsw.utexas.edu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#bf5700`,
        display: `minimal-ui`,
        icon: `src/images/utexas-logo.png`,
      },
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Libre Franklin\:300,300i,500,500i,700,700i`,
        ],
        display: "swap",
      },
    },
  ],
}

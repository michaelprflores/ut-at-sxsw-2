/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/1883Sans-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="1883Font"
    />,
  ])
}
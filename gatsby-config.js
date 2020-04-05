const siteMetadata = require('./site-metadata')

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-preload-fonts`
  ]
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
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
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `wpheadless.atwebpages.com`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/categories",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/*/*/menus",
          "**/*/*/menu-locations",

        ],
        excludedRoutes: [],
        normalizer: function({entities}){
          return entities
        },
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
      },
      concurrentRequests: 10,
    },
    'gatsby-plugin-sitemap',
  ],
}

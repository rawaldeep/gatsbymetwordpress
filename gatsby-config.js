/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/gatsbymetwordpress`,
  siteMetadata: {
    title: `Title from siteMetadata`,
    siteUrl: `https://rawaldeep.github.io/gatsbymetwordpress/`
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
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
      'gatsby-plugin-netlify',
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

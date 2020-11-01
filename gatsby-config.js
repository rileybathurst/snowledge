module.exports = {
  siteMetadata: {
    title: `Snowledge`,
    description: `Snowledge is the only app you need on the mountain.`,
    author: `@snowledge_co`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://167.99.108.163',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'partner-resorts',
          'blogs',
          'team',
          'ads',
          'partners'
        ],
        queryLimit: 1000,
        // // Possibility to login with a strapi user, when content types are not publically available (optional).
        /* loginData: {
          identifier: "strapi",
          password: "hytsyp-8xEtqe-gownyv",
        }, */
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Snowledge`,
        short_name: `Snowledge`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Snowledge_App_Icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: `Boss timer`,
    description: `Set WOD timers like AMRAP, For time, EMOM and Tabata`,
    author: `Edwin Bos`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WOD timer`,
        short_name: `WOD timer`,
        start_url: `/`,
        background_color: `#04e762`,
        theme_color: `#04e762`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

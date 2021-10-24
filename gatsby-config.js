module.exports = {
  siteMetadata: {
    title: `Dino Park`,
    description: `A Moderna day Dino Park Mainetnance Monitoring Tool - Input Output Inc`,
    author: `Kwena Mokgohlwa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

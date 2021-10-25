module.exports = {
  siteMetadata: {
    title: `Dino.IO™`,
    description: `Dino Park Monitoring Tool for Maintenance Teams.`,
    author: `Kwena Mokgohlwa - IO Input Output, Inc.`,
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

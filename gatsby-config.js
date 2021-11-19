require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Design+Code`,
    description: `Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.`,
    author: `JRT-WEBSTUDIO`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
   resolve: `gatsby-source-contentful`,
   options: {
     spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
     accessToken: process.env.GATSBY_CONTENTFUL_DELIVERY_TOKEN,
   }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
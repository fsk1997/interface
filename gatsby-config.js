require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = "https://interface.saykiat.com"

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 30,
        defaults: {
          backgroundColor: `transparent`,
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
        }
      },
    },
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve:"gatsby-plugin-sitemap",
      options:{
        output: `/`,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `https://interface.saykiat.com/sitemap-0.xml`,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GTAG, // Google Analytics / GA
        ],
        pluginConfig: {
          head: true        
        },
      }
    }
  ],
}

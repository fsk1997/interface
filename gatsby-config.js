require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = "https://interface.saykiat.com"

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    title: "Interface. by SayKiat",
    description:"A compilation of React CSS test drive.",
    url: "https://interface.saykiat.com", // No trailing slash allowed!
    image: "/og-image.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@SayKiat_____",
  },
  plugins: [
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/",
      },
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
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //     purgeCSSOptions: {
    //       // https://purgecss.com/configuration.html#options
    //       // safelist: ['safelist'], // Don't remove this selector
    //     },
    //     // More options defined here https://purgecss.com/configuration.html#options
    //   },
    // },
  ],
}

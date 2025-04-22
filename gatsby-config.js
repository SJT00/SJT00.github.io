module.exports = {
  siteMetadata: {
    title: `Saad Taj`,
    siteUrl: "https://sjt00.github.io/",
    image: `static/Logo.png`,
    description: `Software Developer and Honours Mathematics Graduate`,
    author: `SJT00`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-KEMH0Y8HS6", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          api: "modern",
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/Logo.png",
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        // gatsby aliases for better imports
        alias: {
          "@images": "src/images",
          "@hooks": "src/hooks",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@subpages": "src/subpages",
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `devlogs`,
        path: `${__dirname}/devlogs/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};

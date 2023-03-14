module.exports = {
  siteMetadata: {
    title: `Saad Taj`,
    siteUrl: "https://sjt00.github.io/",
    description: `Software Developer, Frontend Designer and Honours Mathematics Student`,
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
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/Logo.png",
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
  ],
};

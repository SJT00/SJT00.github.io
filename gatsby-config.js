module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Saad Taj`,
    siteUrl: "https://sjt00.github.io/",
    description: `Software Developer, Frontend Designer and Honours Mathematics Student`,
    author: `SJT00`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
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
  ],
};

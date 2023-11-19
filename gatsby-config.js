/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ТОВ ТЕКС-ІКА`,
        short_name: `ТЕКС-ІКА`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
  ],
  siteMetadata: {
    title: "ТЕКС-ІКА",
  },
};

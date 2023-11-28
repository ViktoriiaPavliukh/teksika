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
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ТОВ ТЕКС-ІКА`,
        short_name: `ТЕКС-ІКА`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/assets/images/favicon.jpeg`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("autoprefixer")],
      },
    },
  ],
  siteMetadata: {
    languages: ["uk", "en"],
    defaultLanguage: "uk",
    titles: {
      uk: 'ТОВ "ТЕКС-ІКА"',
      en: 'LLC "TEKS-IKA"',
    },
    descriptions: {
      uk: "Оптова торгівля матеріалами і фурнітурою для пошиття білизни, купальників, спортивного одягу та іншого.",
      en: "Wholesale trade of materials and accessories for the production of lingerie, swimwear, sportswear, and more.",
    },
  },
};

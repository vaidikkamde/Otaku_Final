module.exports = {
  pathPrefix: `/otaku`,
  siteMetadata: {
    title: `OTAKU`,
    description: `Otaku is Student Organization under divison of student welfare at Lovely Professional University. It hosts Events and workshops for students.`,
    author: `@Student Org Otaku`,
    siteUrl: `https://otakuorg.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Student Organization Otaku`,
        short_name: `OTAKU`,
        start_url: `/`,
        background_color: `#006666`,
        theme_color: `#006666`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

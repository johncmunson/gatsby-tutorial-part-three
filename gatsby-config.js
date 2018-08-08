module.exports = {
    siteMetadata: {
        title: `Pandas Eating Things`
    },
    plugins: [
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        }
    ]
}

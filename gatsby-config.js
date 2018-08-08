module.exports = {
    siteMetadata: {
        title: `Blah Blah Fake Title`
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

module.exports = {
    siteMetadata: {
        title: `Pandas Eating Things`
    },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        }
    ]
}

module.exports = {
    pathPrefix: `/your-prefix`,
    siteMetadata: {
        title: 'Wordpress Gatsby',
        subtitle: `Fetch Data From Local WP Install`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "http://monkhosts.com",
                protocol: "http",
                hostingWPCOM: false,
                useACF: true,
                verboseOutput: true
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp'
    ],
};

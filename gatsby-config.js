module.exports = {
  siteMetadata: {
    siteUrl: `https://www.glompix.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
  ],
}

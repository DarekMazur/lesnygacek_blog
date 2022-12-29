module.exports = {
  siteMetadata: {
    title: `lesnygacek_landing`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
<<<<<<< HEAD
        icon: 'src/images/favicon.png',
=======
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Montserrat',
            weights: ['200', '400', '600', '900'],
            variable: ['ital'],
          },
          {
            family: 'Holtwood One SC',
            weights: ['400'],
          },
          {
            family: 'Cormorant Unicase',
            weights: ['400'],
          },
        ],
>>>>>>> b651960a66d949451c8cd549ba6babcf82873e55
      },
    },
  ],
};

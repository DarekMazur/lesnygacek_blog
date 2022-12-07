module.exports = {
  siteMetadata: {
    title: `lesnygacek`,
    siteUrl: `https://www.lesnygacek.pl`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-QLELH6H8Z8',
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
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
      },
    },
  ],
};

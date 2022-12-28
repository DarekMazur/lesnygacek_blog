require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Leśny Gacek`,
    siteUrl: `https://www.lesnygacek.pl`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-custom`,
    //   options: {
    //     apiKey: process.env.API_KEY,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-QLELEH6H8Z8',
        head: false,
        anonymize: true,
        repectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
        enableWebVitalsTracking: true,
      },
    },
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
        icon: 'src/assets/images/square_logo.png',
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
      },
    },
  ],
};

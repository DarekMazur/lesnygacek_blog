require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Leśny Gacek`,
    siteUrl: `https://www.lesnygacek.pl`,
  },
  plugins: [
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
            family: 'Playfair Display SC',
            weights: ['700'],
          },
          {
            family: 'Cormorant Unicase',
            weights: ['400'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-strapi-graphql',
      options: {
        apiURL: process.env.STRAPI_API_URL,
        collectionTypes: ['Post', 'Category', 'Author'],
        preview: true,
        token: process.env.STRAPI_TOKEN,
        cache: false,
      },
    },
  ],
};

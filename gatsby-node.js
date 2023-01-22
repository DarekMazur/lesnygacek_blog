const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allStrapiPost(limit: 1000) {
          edges {
            node {
              id
              title
              slug
              publishedAt
              author {
                name
                avatar {
                  file {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
                    }
                  }
                }
                sign {
                  file {
                    url
                  }
                }
              }
              categories {
                title
              }
              description
              postBody
              cover {
                file {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: [AUTO, WEBP]
                      layout: FULL_WIDTH
                      aspectRatio: 3.2
                      transformOptions: { fit: COVER, cropFocus: ATTENTION }
                    )
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const articleTemplate = path.resolve(`src/pages/singlePost.js`);
  result.data.allStrapiPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: articleTemplate,
      context: {
        article: edge.node,
      },
    });
  });
};

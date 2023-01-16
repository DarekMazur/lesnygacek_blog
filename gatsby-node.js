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
                      fluid {
                        tracedSVG
                        src
                      }
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
                icon {
                  file {
                    url
                  }
                }
                defaultIcon
              }
              description
              postBody
              cover {
                file {
                  childImageSharp {
                    fluid {
                      src
                    }
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

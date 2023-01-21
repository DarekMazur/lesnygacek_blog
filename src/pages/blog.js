import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Title from '../components/Atoms/Title/Title';
import ArticleThumb from '../components/Molecules/ArticleThumb/ArticleThumb';
import Wrapper from '../components/Molecules/Wrapper/Wrapper';
import Layout from '../components/Templates/Layout/Layout';
import { mockData } from '../data/mockData';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';
import { useStaticQuery, graphql } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPost(sort: { fields: publishedAt, order: DESC }) {
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
                  gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP], layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>
          <Wrapper contentWidth="100%">
            <Title>Articles</Title>
          </Wrapper>
          <Wrapper contentWidth="100%" display="grid" grid="2" gap="4rem">
            {data.allStrapiPost.edges.map((post) => (
              <ArticleThumb key={post.node.id} articleData={post.node} width="none" />
            ))}
          </Wrapper>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default BlogPage;

export const Head = () => <title>Articles</title>;

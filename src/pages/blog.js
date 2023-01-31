import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Title from '../components/Atoms/Title/Title';
import ArticleThumb from '../components/Molecules/ArticleThumb/ArticleThumb';
import Wrapper from '../components/Molecules/Wrapper/Wrapper';
import Layout from '../components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';
import { useStaticQuery, graphql } from 'gatsby';
import { useState } from 'react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

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
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                    layout: FULL_WIDTH
                    aspectRatio: 1.6
                    transformOptions: { fit: COVER, cropFocus: ATTENTION }
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.allStrapiPost.edges;

  const [postsList, setPostList] = useState(data.allStrapiPost.edges.slice(0, 5));
  const [hasMore, setHasMore] = useState(true);

  const getMorePosts = () => {
    const newPosts = posts.slice(postsList.length, postsList.length + 5);
    setPostList((postsList) => [...postsList, ...newPosts]);
  };

  useEffect(() => {
    setHasMore(posts.length > postsList.length);
  }, [postsList]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>
          <Wrapper contentWidth="100%">
            <Title>Articles</Title>
          </Wrapper>
          {/* <Wrapper contentWidth="100%" display="grid" grid="2" gap="4rem"> */}
          <Wrapper contentWidth="100%">
            {postsList && postsList.length !== 0 ? (
              <InfiniteScroll
                dataLength={postsList.length}
                next={getMorePosts}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage=<h4>To by było na tyle. Wróć później po więcej</h4>
              >
                {postsList.map((post) => (
                  <ArticleThumb key={post.node.id} articleData={post.node} width="none" />
                ))}
              </InfiniteScroll>
            ) : null}
          </Wrapper>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default BlogPage;

export const Head = () => <title>Articles</title>;

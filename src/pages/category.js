import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Title from '../components/Atoms/Title/Title';
import ArticleThumb from '../components/Molecules/ArticleThumb/ArticleThumb';
import Wrapper from '../components/Molecules/Wrapper/Wrapper';
import Layout from '../components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';
import { useState } from 'react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../components/Molecules/Loading/Loading';
import { P } from '../components/Atoms/P/P.styles';

const CategoryPage = ({ pageContext }) => {
  const { category } = pageContext;
  const posts = category.posts;

  const [postsList, setPostList] = useState(posts.slice(0, 5));
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
            <Title>{category.title}</Title>
          </Wrapper>
          {posts && posts.length !== 0 ? (
            <Wrapper
              as={InfiniteScroll}
              contentWidth="100%"
              display="grid"
              grid="2"
              gap="4rem"
              dataLength={posts.length}
              next={getMorePosts}
              hasMore={hasMore}
              loader={<Loading />}
              endMessage={
                <P options={{ margin: '3rem', weight: 'fat', size: 'lm' }} style={{ gridColumnStart: '1' }}>
                  To by było na tyle. Wróć później po więcej 😊
                </P>
              }
            >
              {posts.map((post) => (
                <ArticleThumb key={post.id} articleData={post} width="none" />
              ))}
            </Wrapper>
          ) : null}
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default CategoryPage;

export const Head = () => <title>Kategoria</title>;

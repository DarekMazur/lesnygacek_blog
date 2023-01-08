import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Title from '../components/Atoms/Title/Title';
import ArticleThumb from '../components/Molecules/ArticleThumb/ArticleThumb';
import Wrapper from '../components/Molecules/Wrapper/Wrapper';
import Layout from '../components/Templates/Layout/Layout';
import { mockData } from '../data/mockData';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';

const BlogPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>
          <Wrapper contentWidth="100%">
            <Title>Articles</Title>
          </Wrapper>
          <Wrapper contentWidth="100%" display="grid" grid="2" gap="4rem">
            {mockData.map((post) => (
              <ArticleThumb key={post.id} articleData={post} width="none" />
            ))}
          </Wrapper>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default BlogPage;

export const Head = () => <title>Articles</title>;

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Title from '../Components/Atoms/Title/Title';
import ArticleThumb from '../Components/Molecules/ArticleThumb/ArticleThumb';
import Wrapper from '../Components/Molecules/Wrapper/Wrapper';
import Layout from '../Components/Templates/Layout/Layout';
import { mockData } from '../data/mockData';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';

const BlogPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>
          <Wrapper>
            <Title>Articles</Title>
            {mockData.map((post) => (
              <ArticleThumb key={post.id} articleData={post} />
            ))}
          </Wrapper>
          <Wrapper align={{ justify: 'center', align: 'start' }}>lorem ipsum</Wrapper>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default BlogPage;

export const Head = () => <title>Articles</title>;

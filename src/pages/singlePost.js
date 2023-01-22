import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ArticleDetails from '../components/Molecules/ArticleDetails/ArticleDetails';

import Wrapper from '../components/Molecules/Wrapper/Wrapper';
import Pagination from '../components/Molecules/Pagination/Pagination';
import Signature from '../components/Atoms/Signature/Signature';

const SinglePost = ({ pageContext }) => {
  const { article } = pageContext;
  const cover = getImage(article.cover?.file);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>
          <GatsbyImage image={cover} alt={article.title} />
          <ArticleDetails date={article.publishedAt} title={article.title} categories={article.categories} />
          <Wrapper as="section" contentWidth="100%">
            <Wrapper align={{ justify: 'center', align: 'start' }} direction="column" contentWidth="70%">
              {article.postBody}
              <Signature author={article.author} />
            </Wrapper>
          </Wrapper>
          <Pagination />
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default SinglePost;

export const Head = ({ pageContext }) => {
  const { article } = pageContext;
  return <title>{article.title}</title>;
};

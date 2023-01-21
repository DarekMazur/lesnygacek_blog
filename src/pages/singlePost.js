import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
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
          {/* <StaticImage
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            alt=""
            placeholder="blurred"
            layout="fullWidth"
            transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
            aspectRatio={16 / 5}
            formats={['auto', 'webp']}
          /> */}
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

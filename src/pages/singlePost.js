import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../Components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';
import { StaticImage } from 'gatsby-plugin-image';
import ArticleDetails from '../Components/Molecules/ArticleDetails/ArticleDetails';
import Button from '../Components/Atoms/Button/Button';

import { mockData } from '../data/mockData';
import Wrapper from '../Components/Molecules/Wrapper/Wrapper';

const SinglePost = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>
          <StaticImage
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            placeholder="blurred"
            layout="fullWidth"
            transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
            aspectRatio={16 / 5}
            formats={['auto', 'webp']}
          />
          <ArticleDetails date={mockData[0].publishedAt} title={mockData[0].title} category={mockData[0].category} />
          <section>
            <Wrapper align={{ justify: 'center', align: 'start' }} direction="column">
              {mockData[0].postBody}
              <p>Signature</p>
            </Wrapper>
          </section>
          <section>
            <Button primaryText={'Previous'} secondaryText={'Go on!'} />
            <Button primaryText={'Next'} secondaryText={'Go on!'} />
          </section>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default SinglePost;

export const Head = () => <title>Single Page</title>;

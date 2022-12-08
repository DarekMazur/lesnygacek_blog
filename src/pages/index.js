import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../Components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>Main</main>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

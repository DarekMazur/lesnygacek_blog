import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';

const PrivacyPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>lorem ipsum</main>
      </Layout>
    </ThemeProvider>
  );
};

export default PrivacyPage;

export const Head = () => <title>Privacy Page</title>;

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Icon from '../Components/Atoms/Icon/Icon';
import Layout from '../Components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>
          <h2>Main</h2>
          <Icon icon={'fa'} iconType={['fas', 'hiking']} />
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

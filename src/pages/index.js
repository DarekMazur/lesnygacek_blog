import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header>Header</header>
      <main>Main</main>
      <footer>Footer</footer>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

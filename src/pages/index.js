import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/themes/theme';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>Lorem Ipsum</main>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

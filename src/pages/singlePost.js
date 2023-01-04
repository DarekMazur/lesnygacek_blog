import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../Components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';

const SinglePost = () => {
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout></Layout>
  </ThemeProvider>;
};

export default SinglePost;

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../Components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';

const ContactPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>
          <p>lorem ipsum</p>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;

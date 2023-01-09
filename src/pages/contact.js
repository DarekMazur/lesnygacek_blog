import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Title from '../components/Atoms/Title/Title';
import Wrapper from '../components/Molecules/Wrapper/Wrapper';
import Layout from '../components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';

const ContactPage = ({ sub, light }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Wrapper as="main">
          <Title sub={sub} light={light}>
            Kontakt
          </Title>
        </Wrapper>
        <Wrapper align={{ justify: 'space-between' }}>
          <div>kontact message</div>
          <div>kontact form</div>
        </Wrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import MenuListItem from '../components/Atoms/MenuListItem/MenuListItem';
import { P } from '../components/Atoms/P/P.styles';
import Title from '../components/Atoms/Title/Title';
import MenuList from '../components/Molecules/MenuList/MenuList';
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
          <div>
            <P>
              Lorem ipsum dolor sit amet consectetur. Fusce feugiat vulputate blandit dignissim aliquet ultrices facilisi. Ipsum nunc tristique
              consequat ac in. Amet accumsan faucibus vel velit enim id. Nisl ut orci tristique eget tincidunt ut.
            </P>
            <MenuList column>
              <MenuListItem social="instagram" />
              <MenuListItem social="messenger" />
            </MenuList>
          </div>
          <div>kontact form</div>
        </Wrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;

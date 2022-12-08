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
          <div>
            <Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} size="default" />
            <Icon icon={'fa'} iconType={['fab', 'youtube']} size="medium" />
            <Icon icon={'fa'} iconType={['fab', 'facebook-f']} size="small" />
            <Icon icon={'fa'} iconType={['fab', 'instagram']} size="default" />
            <Icon icon={'fa'} iconType={['fas', 'tree']} size="default" />
            <Icon icon={'fa'} iconType={['fas', 'search']} size="default" />
            <Icon icon={'fa'} iconType={['fas', 'link']} size="default" />
            <Icon icon={'fa'} iconType={['fas', 'hiking']} size="default" />
            <Icon iconType="axe" size="default" />
            <Icon iconType="backpack" size="default" />
            <Icon iconType="campfire" size="default" />
          </div>
          <div style={{ backgroundColor: '#444' }}>
            <Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} light size="default" />
            <Icon icon={'fa'} iconType={['fab', 'youtube']} light size="medium" />
            <Icon icon={'fa'} iconType={['fab', 'facebook-f']} light size="small" />
            <Icon icon={'fa'} iconType={['fab', 'instagram']} light size="default" />
            <Icon icon={'fa'} iconType={['fas', 'tree']} light size="default" />
            <Icon icon={'fa'} iconType={['fas', 'search']} light size="default" />
            <Icon icon={'fa'} iconType={['fas', 'link']} light size="default" />
            <Icon icon={'fa'} iconType={['fas', 'hiking']} light size="default" />
            <Icon iconType="axe" light size="default" />
            <Icon iconType="backpack" light size="default" />
            <Icon iconType="campfire" light size="default" />
          </div>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

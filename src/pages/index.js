import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../Components/Atoms/Button/Button';
import Category from '../Components/Atoms/Category/Category';
import Icon from '../Components/Atoms/Icon/Icon';
import MenuListItem from '../Components/Atoms/MenuListItem/MenuListItem';
import Title from '../Components/Atoms/Title/Title';
import ArticleThumb from '../Components/Molecules/ArticleThumb/ArticleThumb';
import MenuList from '../Components/Molecules/MenuList/MenuList';
import SectionHeader from '../Components/Molecules/SectionHeader/SectionHeader';
import Layout from '../Components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>
          <div>
            <Title>Lorem Ipsum dolor sit amet</Title>
          </div>
          <div style={{ backgroundColor: '#444' }}>
            <Title light>Lorem Ipsum dolor sit amet</Title>
          </div>
          <div>
            <Title sub>Lorem Ipsum dolor sit amet</Title>
          </div>
          <div style={{ backgroundColor: '#444' }}>
            <Title light sub>
              Lorem Ipsum dolor sit amet
            </Title>
          </div>

          <div>
            <Category category="tools" />
            <Category category="trips" />
            <Category category="thoughts" />
            <Category category="others" />
          </div>
          <div style={{ backgroundColor: '#444' }}>
            <Category category="tools" light />
            <Category category="trips" light />
            <Category category="thoughts" light />
            <Category category="others" light />
          </div>

          <SectionHeader title={'Lorem Ipsum Dolor'}>
            <ArticleThumb />
          </SectionHeader>

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
          <div>
            <MenuList>
              <MenuListItem>Item</MenuListItem>
              <MenuListItem>Item</MenuListItem>
            </MenuList>
            <MenuList>
              <MenuListItem social="youtube" />
              <MenuListItem social="facebook" />
              <MenuListItem social="instagram" />
              <MenuListItem social="messenger" />
            </MenuList>
          </div>
          <div style={{ backgroundColor: '#444' }}>
            <MenuList>
              <MenuListItem light>Item</MenuListItem>
              <MenuListItem light>Item</MenuListItem>
            </MenuList>
            <MenuList>
              <MenuListItem social="youtube" light />
              <MenuListItem social="facebook" light />
              <MenuListItem social="instagram" light />
              <MenuListItem social="messenger" light />
            </MenuList>
          </div>
          <div>
            <Button primaryText={'Click me!'} secondaryText={'Success!'} loadingText={'Loading!'} />
          </div>
          <div style={{ backgroundColor: '#444' }}>
            <Button primaryText={'Click me!'} secondaryText={'Success!'} loadingText={'Loading!'} light />
          </div>
          <div>
            <Button primaryText={'Click me!'} secondaryText={'Go on!'} />
          </div>
          <div style={{ backgroundColor: '#444' }}>
            <Button primaryText={'Click me!'} secondaryText={'Go on!'} light />
          </div>

          <SectionHeader title={'Lorem Ipsum Dolor'} options={['right', 'light']}>
            <Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} size="default" />
            <div>
              <Button primaryText={'Click me!'} secondaryText={'Success!'} loadingText={'Loading!'} />
            </div>
          </SectionHeader>
          <SectionHeader title={'Dolor Sit Amet'} light>
            <Icon icon={'fa'} iconType={['fab', 'facebook-f']} size="default" light />
            <div>
              <Button primaryText={'Click me!'} secondaryText={'Success!'} loadingText={'Loading!'} light />
            </div>
          </SectionHeader>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

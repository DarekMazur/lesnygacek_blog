import * as React from 'react';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Avatar from '../components/Atoms/Avatar/Avatar';
import { P } from '../components/Atoms/P/P.styles';
import { Span } from '../components/Atoms/Span/Span.styles';
import ArticleThumb from '../components/Molecules/ArticleThumb/ArticleThumb';
import SectionWrapper from '../components/Molecules/SectionWrapper/SectionWrapper';
import InstaGrid from '../components/Organisms/InstaGrid/InstaGrid';
import Layout from '../components/Templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/themes/theme';

import { mockData } from '../data/mockData';
import { mockPageData } from '../data/mockPageData';
import { highlightFirstSentence } from '../utils/helpers/highlightFirstSentence';

const IndexPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://graph.facebook.com/v15.0/${process.env.GATSBY_IG_USER}/media?fields=id,media_type,media_url,shortcode,like_count&limit=6&access_token=${process.env.GATSBY_IG_KEY}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('Something went wrong');
        })
        .then((result) => {
          setData(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <main>
          <SectionWrapper title="Bushcrafty, bushcrafty" options={['right', 'light']}>
            <P options={{ size: 'xl', weight: 'fat', justify: 'center' }}>
              <Span color={'brown'}>{highlightFirstSentence(mockPageData.description).firstSentence}.</Span>
              {highlightFirstSentence(mockPageData.description).other}
            </P>
          </SectionWrapper>

          <SectionWrapper title="Ostatnie artukuły">
            {mockData.slice(0, 2).map((post) => (
              <ArticleThumb key={post.id} articleData={post} home />
            ))}
          </SectionWrapper>

          {data ? (
            <SectionWrapper title="Rzuć okiem na Insta" options={['right', 'light']}>
              <InstaGrid data={data} />
            </SectionWrapper>
          ) : null}

          <SectionWrapper title="O mnie słów kilka" contentWidth="60%" align={{ align: 'center' }}>
            <P options={{ color: 'white' }}>
              Lorem ipsum dolor sit amet consectetur. Dictum viverra fermentum libero tortor facilisis velit posuere. Dolor facilisi morbi tellus quam
              lorem feugiat ut pellentesque. Non justo fermentum sed elit ac pellentesque facilisis. Praesent tristique leo eros commodo turpis. Urna
              turpis habitasse etiam et. Pretium eu nisl tortor ipsum rhoncus platea eu sollicitudin nulla. Magna pharetra facilisis eget ipsum
              egestas et semper lacus sit. Tincidunt habitant feugiat adipiscing ultrices varius lectus felis mauris. Elementum ut libero commodo a
              porttitor mattis semper. Orci dolor consectetur sed fringilla iaculis faucibus enim. Quis faucibus massa diam non viverra lobortis massa
              et. Adipiscing vulputate leo lectus massa leo leo pellentesque aliquet.
            </P>
            <Avatar />
          </SectionWrapper>
          {/* <div>
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

          <CustomLink url="/" link="Link" />

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
          <div>
            <Category category="tools" />
            <Category category="trips" />
            <Category category="thoughts" />
            <Category category="others" />
          </div>
          
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

          <SectionWrapper title={mockData[0].title} options={['right', 'light']}>
            <Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} size="default" />
            <div>
              <Button primaryText={'Click me!'} secondaryText={'Success!'} loadingText={'Loading!'} />
            </div>
          </SectionWrapper>
          <SectionWrapper title={'Dolor Sit Amet'} light>
            <Icon icon={'fa'} iconType={['fab', 'facebook-f']} size="default" light />
            <div>
              <Button primaryText={'Click me!'} secondaryText={'Success!'} loadingText={'Loading!'} light />
            </div>
          </SectionWrapper> */}
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

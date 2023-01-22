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
import { useStaticQuery, graphql } from 'gatsby';
import { mockPageData } from '../data/mockPageData';
import { highlightFirstSentence } from '../utils/helpers/highlightFirstSentence';

const IndexPage = () => {
  const [data, setData] = useState([]);

  const homeData = useStaticQuery(graphql`
    query {
      allStrapiPost(limit: 2, sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedAt
            author {
              name
              avatar {
                file {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
              sign {
                file {
                  url
                }
              }
            }
            categories {
              title
            }
            description
            postBody
            cover {
              file {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                    layout: FULL_WIDTH
                    aspectRatio: 1.8
                    transformOptions: { fit: COVER, cropFocus: ATTENTION }
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

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
            {homeData.allStrapiPost.edges.slice(0, 2).map((post) => (
              <ArticleThumb key={post.node.id} articleData={post.node} home />
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
          {/* 
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

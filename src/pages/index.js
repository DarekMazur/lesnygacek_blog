import * as React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Border from '../components/Border';
import background from '../images/backgr.jpg';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: no-repeat center/cover url(${background});
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 10px;
    margin: 0;
    text-align: center;
  }
`;

const Main = styled.main`
  color: white;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const CenterDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 20px;
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <CenterDiv>
          <h1>Witaj u Leśnego Gacka!</h1>
          <Border />
          <Paragraph>
            serdeczne dzięki za odwiedziny, ale obóz jeszcze nie jest rozbity 🏕️
          </Paragraph>
        </CenterDiv>
      </Main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>W budowie...</title>;

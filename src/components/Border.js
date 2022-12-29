import * as React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import campfire from '../images/logo.svg';

const intro = keyframes`
  0% {
    height: 0;
    width: 0;
  }
  50% {
    height: 0;
    width: 80vw;
  }
  100% {
    height: 30vh;
    width: 80vw;
  }
`;

const StyledBorder = styled.div`
  height: 0;
  width: 0;
  border-top: solid white 2px;
  border-bottom: solid white 2px;
  animation: 2s normal forwards 0.5s 1 ${intro} ease-in-out;
  overflow: hidden;
`;

const Img = styled.img`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 20vh;
  margin: 10px;
`;

const Border = () => {
  return (
    <StyledBorder>
      <Img src={campfire} />
    </StyledBorder>
  );
};

export default Border;

import React from 'react';
import { StyledTitle } from './Title.styles';

const Title = ({ children, light, sub }) => {
  return (
    <StyledTitle light={light} sub={sub}>
      <h3>{children}</h3>
    </StyledTitle>
  );
};

export default Title;

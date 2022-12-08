import React from 'react';
import { StyledTitle } from './Title.styles';

const Title = ({ children, light }) => {
  return (
    <StyledTitle light={light}>
      <h3>{children}</h3>
    </StyledTitle>
  );
};

export default Title;

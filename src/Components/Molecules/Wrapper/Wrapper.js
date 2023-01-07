import React from 'react';
import { StyledWrapper } from './Wrapper.styles';

const Wrapper = ({ children, ...props }) => {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};

export default Wrapper;

import React from 'react';
import { StyledWrapper } from './Wrapper.styles';

const Wrapper = ({ children, ...props }) => {
  return (
    <StyledWrapper {...props}>
      {/* {console.log({ ...props })} */}
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;

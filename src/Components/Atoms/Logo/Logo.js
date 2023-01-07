import React from 'react';
import { scrollToTop } from '../../../utils/helpers/scrollToTop';
import { vectorLogo } from '../../../utils/helpers/vectorLogo';
import { StyledLogo } from './Logo.styled';

const Logo = ({ logo, light, size }) => {
  return (
    <StyledLogo light={light} size={size} data-testid={logo} onClick={scrollToTop}>
      {vectorLogo[logo]}
    </StyledLogo>
  );
};
export default Logo;

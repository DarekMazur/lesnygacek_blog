import React from 'react';
import { vectorLogo } from '../../../utils/helpers/vectorLogo';
import { StyledLogo } from './Logo.styled';

const Logo = ({ logo, light, size }) => {
  return (
    <StyledLogo light={light} size={size}>
      {vectorLogo[logo]}
    </StyledLogo>
  );
};
export default Logo;

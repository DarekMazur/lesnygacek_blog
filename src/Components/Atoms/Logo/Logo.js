import React from 'react';
import { vectorLogo } from '../../../utils/helpers/vectorLogo';
import { StyledLogo } from './Logo.styled';

const Logo = ({ logo, light }) => {
  return <StyledLogo light={light}>{vectorLogo[logo]}</StyledLogo>;
};
export default Logo;

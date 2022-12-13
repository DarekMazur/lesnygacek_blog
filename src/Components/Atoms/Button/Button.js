import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ primaryText, secondaryText, loadingText, light }) => {
  return (
    <StyledButton light={light}>
      <span>{primaryText}</span>
      {loadingText ? <span>{loadingText}</span> : null}
      {secondaryText ? <span>{secondaryText}</span> : null}
    </StyledButton>
  );
};

export default Button;

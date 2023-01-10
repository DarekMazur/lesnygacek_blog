import React, { useState } from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ primaryText, secondaryText, loadingText, light, type, disabled }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    //fake loading/sending
    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
    }, 3000);
    setTimeout(() => {
      setIsSuccess(false);
    }, 8000);
  };

  return (
    <StyledButton
      light={light}
      isLoading={isLoading}
      isSuccess={isSuccess}
      onClick={handleSubmit}
      onMouseEnter={() => {
        if (!loadingText) return setIsLoading(true);
      }}
      onMouseLeave={() => {
        if (!loadingText) return setIsLoading(false);
      }}
      allowSending={loadingText}
      type={type}
      disabled={disabled}
    >
      <span>{primaryText}</span>
      {loadingText ? <span data-testid="loadingSpan">{loadingText}</span> : null}
      {secondaryText ? <span>{secondaryText}</span> : null}
    </StyledButton>
  );
};

export default Button;

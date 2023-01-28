import React, { useEffect, useState } from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ primaryText, secondaryText, loadingText, light, type, disabled, isLoading: isLoadingProp, isSuccess }) => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(isLoadingProp);

  useEffect(() => {
    setIsSent(isSuccess);
  }, [isSuccess]);

  return (
    <StyledButton
      light={light}
      isLoading={isLoading}
      isSuccess={isSent}
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

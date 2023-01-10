import React from 'react';
import Button from '../../Atoms/Button/Button';
import { StyledFormWrapper } from './FormWrapper.styles';

const FormWrapper = ({ children, primaryText, secondaryText, loadingText, options }) => {
  return (
    <StyledFormWrapper options={options}>
      <form>{children}</form>
      <Button primaryText={primaryText} secondaryText={secondaryText} loadingText={loadingText} />
    </StyledFormWrapper>
  );
};

export default FormWrapper;

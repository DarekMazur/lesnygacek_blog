import React from 'react';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';
import { StyledFormField } from './FormField.styles';

const FormField = ({ primaryText, secondaryText, loadingText, options }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledFormField options={options}>
      <form onSubmit={handleSubmit}>
        <Input name="name" id="name" label="Imię" value="" isRequired />
        <Input type="email" name="email" id="email" label="E-mail" value="" isRequired />
        <Input tag="textarea" name="message" id="message" label="Wiadomość" value="" isRequired />
        <Input type="checkbox" name="acceptTerms" id="acceptTerms" label="Akceptuję zasady prywatności" value="" isRequired />
        <Button primaryText={primaryText} secondaryText={secondaryText} loadingText={loadingText} type="submit" />
      </form>
    </StyledFormField>
  );
};

export default FormField;

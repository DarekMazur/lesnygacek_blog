import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, Label, StyledInput } from './Input.styles';
import { P } from '../P/P.styles';

const Input = ({ tag: Tag, type, name, id, label, isRequired, onChange, value, errorMessage, isChecked }) => {
  const [isBlur, setIsBlur] = useState(false);

  const handleOnFocus = () => {
    setIsBlur(true);
  };

  const handleOnBlur = (e) => {
    if (e.target.value === '') {
      setIsBlur(false);
    }
  };

  return (
    <InputWrapper>
      <Label htmlFor={name} isBlur={type === 'checkbox' ? false : isBlur} type={type}>
        {label}
      </Label>
      <StyledInput
        as={Tag}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        required={isRequired}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        isError={errorMessage !== null}
        checked={isChecked}
      />
      {errorMessage ? <P options={{ color: 'red' }}>{errorMessage}</P> : null}
    </InputWrapper>
  );
};

Input.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.bool.isRequired]),
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  tag: 'input',
  type: 'text',
  isRequired: false,
};

export default Input;

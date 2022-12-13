import React from 'react';

const Button = ({ primaryText, secondaryText, loadingText, light }) => {
  return (
    <button>
      <span>{primaryText}</span>
      {loadingText ? <span>{loadingText}</span> : null}
      {secondaryText ? <span>{secondaryText}</span> : null}
    </button>
  );
};

export default Button;

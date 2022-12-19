import React from 'react';
import Logo from '../../Atoms/Logo/Logo';
import { StyledCopyright } from './Copyright.styles';

const Copyright = ({ pageCopy }) => {
  const date = new Date();

  return (
    <StyledCopyright pageCopy={pageCopy}>
      {pageCopy ? (
        <>
          <Logo logo={'long'} light={'dark'} />
          &copy; {date.getFullYear()}
        </>
      ) : (
        <p>created by Nerdistry</p>
      )}
    </StyledCopyright>
  );
};

export default Copyright;

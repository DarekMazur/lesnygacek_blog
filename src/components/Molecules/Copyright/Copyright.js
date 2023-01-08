import React from 'react';
import { year } from '../../../utils/helpers/date';
import Logo from '../../Atoms/Logo/Logo';
import CustomLink from '../../Atoms/CustomLink/CustomLink';
import { StyledCopyright } from './Copyright.styles';

const Copyright = ({ pageCopy }) => {
  const date = new Date();

  return (
    <StyledCopyright pageCopy={pageCopy} data-testid={pageCopy ? 'page' : 'creator'}>
      {pageCopy ? (
        <>
          <Logo logo={'long'} light={'dark'} />
          &copy; {year}
        </>
      ) : (
        <p>
          created by <CustomLink url="https://nerdistry.pl" link="Nerdistry" />
        </p>
      )}
    </StyledCopyright>
  );
};

export default Copyright;

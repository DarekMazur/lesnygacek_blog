import React from 'react';
import { year } from '../../../utils/helpers/date';
import Logo from '../../Atoms/Logo/Logo';
import CustomLink from '../../Atoms/CustomLink/CustomLink';
import { StyledCopyright } from './Copyright.styles';
import { Link } from 'gatsby';

const Copyright = ({ pageCopy }) => {
  return (
    <StyledCopyright pageCopy={pageCopy} data-testid={pageCopy ? 'page' : 'creator'}>
      {pageCopy ? (
        <>
          <Logo logo={'long'} light={'dark'} />
          &copy; {year}
        </>
      ) : (
        <>
          <p>
            <Link to="/privacy">Polityka prywatności</Link>
          </p>
          <p>
            created by <CustomLink url="https://nerdistry.pl" link="Nerdistry" />
          </p>
        </>
      )}
    </StyledCopyright>
  );
};

export default Copyright;

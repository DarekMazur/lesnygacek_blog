import React from 'react';
import MenuListItem from '../../Atoms/MenuListItem/MenuListItem';
import Copyright from '../../Molecules/Copyright/Copyright';
import MenuList from '../../Molecules/MenuList/MenuList';
import { StyledFooter } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter style={{ backgroundColor: '#93806F' }}>
      <MenuList column>
        <MenuListItem social="youtube" />
        <MenuListItem social="instagram" />
        <MenuListItem social="facebook" />
      </MenuList>
      <Copyright pageCopy />
      <Copyright />
    </StyledFooter>
  );
};

export default Footer;

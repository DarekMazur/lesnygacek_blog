import { Link } from 'gatsby';
import React from 'react';
import Logo from '../../Atoms/Logo/Logo';
import MenuListItem from '../../Atoms/MenuListItem/MenuListItem';
import MenuList from '../../Molecules/MenuList/MenuList';
import { StyledHeder } from './Header.styles';

const Header = () => {
  return (
    <StyledHeder>
      <Link to="/">
        <Logo logo={'long'} />
      </Link>
      <MenuList>
        <MenuListItem light>Item</MenuListItem>
        <MenuListItem light>Item</MenuListItem>
        <MenuListItem light>Item</MenuListItem>
      </MenuList>
      <div>
        search
        <MenuList>
          <MenuListItem light social="youtube" />
          <MenuListItem light social="instagram" />
          <MenuListItem light social="facebook" />
        </MenuList>
      </div>
    </StyledHeder>
  );
};

export default Header;

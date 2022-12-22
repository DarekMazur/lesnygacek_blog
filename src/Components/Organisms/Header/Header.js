import React from 'react';
import Logo from '../../Atoms/Logo/Logo';
import MenuListItem from '../../Atoms/MenuListItem/MenuListItem';
import MenuList from '../../Molecules/MenuList/MenuList';

const Header = () => {
  return (
    <header>
      <Logo logo={'long'} />
      <MenuList>
        <MenuListItem>Item</MenuListItem>
        <MenuListItem>Item</MenuListItem>
        <MenuListItem>Item</MenuListItem>
      </MenuList>
      <div>
        search
        <MenuList>
          <MenuListItem social="youtube" />
          <MenuListItem social="instagram" />
          <MenuListItem social="facebook" />
        </MenuList>
      </div>
    </header>
  );
};

export default Header;

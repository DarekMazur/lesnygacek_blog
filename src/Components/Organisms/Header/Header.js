import { Link } from 'gatsby';
import React from 'react';
import { mockMenu } from '../../../data/mockMenu';
import Logo from '../../Atoms/Logo/Logo';
import MenuListItem from '../../Atoms/MenuListItem/MenuListItem';
import MenuList from '../../Molecules/MenuList/MenuList';
import { StyledHeder } from './Header.styles';

const activeNavStyle = {
  borderBottom: '.5rem solid',
  marginBottom: '-.5rem',
  color: 'inherit',
};

const Header = () => {
  return (
    <StyledHeder>
      <Link to="/">
        <Logo logo={'long'} />
      </Link>
      <MenuList>
        {mockMenu.map((item) => (
          <Link to={item.link} activeStyle={activeNavStyle}>
            <MenuListItem key={item.title} light>
              {item.title}
            </MenuListItem>
          </Link>
        ))}
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

import React from 'react';
import { StyledMenuList } from './MenuList.styles';

const MenuList = ({ column, children }) => {
  return <StyledMenuList column={column}>{children}</StyledMenuList>;
};

export default MenuList;

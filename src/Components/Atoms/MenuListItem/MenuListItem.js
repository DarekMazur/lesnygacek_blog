import React from 'react';
import Icon from '../Icon/Icon';
import { StyledMenuListItem } from './MenuListItem.styles';

const MenuListItem = ({ children, social, light }) => {
  const socialIconName = {
    facebook: 'facebook-f',
    youtube: 'youtube',
    instagram: 'instagram',
    messenger: 'facebook-messenger',
  };
  return (
    <StyledMenuListItem social={social} light={light}>
      {social ? <Icon icon={'fa'} iconType={['fab', socialIconName[social]]} light={light} size="default" /> : children}
    </StyledMenuListItem>
  );
};

export default MenuListItem;

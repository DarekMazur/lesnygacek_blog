import React from 'react';
import { socialMedia } from '../../../data/socialMedia';
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
    <StyledMenuListItem social={social} light={light} data-testid={social}>
      {social ? (
        <a href={socialMedia[social]} target="_blank">
          <Icon icon={'fa'} iconType={['fab', socialIconName[social]]} light={light} size="default" />
        </a>
      ) : (
        children
      )}
    </StyledMenuListItem>
  );
};

export default MenuListItem;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledIcon } from './Icon.styles';
import { customIcon } from '../../../utils/helpers/customIcon';

const Icon = ({ icon, iconType, light, size, nhover, onClick }) => {
  return (
    <StyledIcon light={light} size={size} data-testid={iconType} nhover={nhover} onClick={onClick}>
      {icon && icon === 'fa' ? <FontAwesomeIcon data-testid={icon} icon={iconType} /> : customIcon[iconType]}
    </StyledIcon>
  );
};

export default Icon;

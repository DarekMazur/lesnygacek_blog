import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledIcon } from './Icon.styles';
import { customIcon } from '../../../utils/helpers/customIcon';

const Icon = ({ icon, iconType, light, size }) => {
  return (
    <StyledIcon light={light} size={size}>
      {icon && icon === 'fa' ? <FontAwesomeIcon icon={iconType} /> : customIcon[iconType]}
    </StyledIcon>
  );
};

export default Icon;

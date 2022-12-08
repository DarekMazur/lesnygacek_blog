import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, iconType }) => {
  return <>{icon && icon === 'fa' ? <FontAwesomeIcon icon={iconType} /> : <p>{iconType}</p>}</>;
};

export default Icon;

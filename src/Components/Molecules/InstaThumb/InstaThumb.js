import React from 'react';
import Icon from '../../Atoms/Icon/Icon';
import { StyledInstaThumb } from './InstaThumb.styles';

const InstaThumb = ({ imgUrl, count }) => {
  return (
    <StyledInstaThumb>
      <img src={imgUrl} />
      <div>
        <Icon icon={'fa'} iconType={['fas', 'heart']} size="default" /> {count}
      </div>
    </StyledInstaThumb>
  );
};

export default InstaThumb;

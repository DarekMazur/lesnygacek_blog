import React from 'react';
import Icon from '../../Atoms/Icon/Icon';
import { StyledInstaThumb } from './InstaThumb.styles';

const InstaThumb = ({ imgUrl, count, link }) => {
  return (
    <StyledInstaThumb as="a" href={`https://www.instagram.com/p/${link}`} target="_blank">
      <img src={imgUrl} />
      <div>
        <Icon icon={'fa'} iconType={['fas', 'heart']} size="default" nhover /> {count}
      </div>
    </StyledInstaThumb>
  );
};

export default InstaThumb;

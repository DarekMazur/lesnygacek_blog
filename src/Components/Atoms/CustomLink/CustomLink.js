import React from 'react';
import Icon from '../Icon/Icon';
import { StyledCustomLink } from './CustomLink.styles';

const CustomLink = ({ url, link }) => {
  return (
    <StyledCustomLink onClick={() => window.open(url)}>
      <Icon icon={'fa'} iconType={['fas', 'link']} size="small" />
      <a href={url} target="_blank">
        {link}
      </a>
    </StyledCustomLink>
  );
};
export default CustomLink;

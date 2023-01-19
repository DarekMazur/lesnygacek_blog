import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { StyledAvatar } from './Avatar.styles';

const Avatar = () => {
  return (
    <StyledAvatar>
      <StaticImage
        src="../../../assets/images/avt.jpg"
        alt="Awatar"
        placeholder="blurred"
        layout="fixed"
        width={250}
        height={250}
        formats={['auto', 'webp']}
      />
    </StyledAvatar>
  );
};

export default Avatar;

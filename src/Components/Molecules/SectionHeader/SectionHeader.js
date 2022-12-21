import React from 'react';
import Title from '../../Atoms/Title/Title';
import { StyledSectionHeader } from './SectionHeader.styles';

const SectionHeader = ({ title, options, children }) => {
  return (
    <StyledSectionHeader data-testid="sectionHeader" light={options?.[1]} position={options?.[0]}>
      <Title light={options?.[1] && options?.[1] === 'light' ? false : true}>{title}</Title>
      <div style={{ display: 'flex', alignItems: 'top', width: 'calc(100vw - 15rem)' }}>{children}</div>
    </StyledSectionHeader>
  );
};

export default SectionHeader;

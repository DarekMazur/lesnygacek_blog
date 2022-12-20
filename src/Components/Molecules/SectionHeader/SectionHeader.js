import React from 'react';
import Title from '../../Atoms/Title/Title';
import { StyledSectionHeader } from './SectionHeader.styles';

const SectionHeader = ({ title, light, children }) => {
  return (
    <StyledSectionHeader data-testid="sectionHeader">
      <Title light={light}>{title}</Title>
      <div>{children}</div>
    </StyledSectionHeader>
  );
};

export default SectionHeader;

import React from 'react';
import Title from '../../Atoms/Title/Title';
import Wrapper from '../Wrapper/Wrapper';
import { StyledSectionHeader } from './SectionHeader.styles';

const SectionHeader = ({ title, options, children }) => {
  return (
    <StyledSectionHeader data-testid="sectionHeader" light={options?.[1]} position={options?.[0]}>
      <Title light={options?.[1] && options?.[1] === 'light' ? false : true}>{title}</Title>
      <Wrapper justify="center" align="start" width="calc(100vw - 15rem)">
        {children}
      </Wrapper>
    </StyledSectionHeader>
  );
};

export default SectionHeader;

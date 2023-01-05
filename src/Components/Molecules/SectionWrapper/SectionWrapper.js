import React from 'react';
import Title from '../../Atoms/Title/Title';
import Wrapper from '../Wrapper/Wrapper';
import { StyledSectionWrapper } from './SectionWrapper.styles';

const SectionWrapper = ({ title, options, contentWidth, children }) => {
  return (
    <StyledSectionWrapper data-testid="SectionWrapper" light={options?.[1]} position={options?.[0]}>
      <Title light={options?.[1] && options?.[1] === 'light' ? false : true}>{title}</Title>
      <Wrapper align={{ justify: 'center', align: 'start' }} contentWidth={contentWidth}>
        {children}
      </Wrapper>
    </StyledSectionWrapper>
  );
};

export default SectionWrapper;

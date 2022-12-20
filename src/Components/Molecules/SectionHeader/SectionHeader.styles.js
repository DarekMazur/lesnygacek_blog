import styled from 'styled-components';

export const StyledSectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

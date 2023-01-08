import styled from 'styled-components';

export const StyledCategory = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, light }) => (light ? theme.colors.white : 'inherit')};

  span {
    padding-left: 0.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

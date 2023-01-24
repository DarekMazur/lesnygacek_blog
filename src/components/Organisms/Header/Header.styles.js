import styled from 'styled-components';

export const StyledHeder = styled.header`
  width: 100vw;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
`;

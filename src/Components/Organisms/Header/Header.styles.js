import styled from 'styled-components';

export const StyledHeder = styled.header`
  width: 100vw;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};

  div {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

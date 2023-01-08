import styled from 'styled-components';

export const StyledCustomLink = styled.span`
  color: ${({ theme }) => theme.colors.lightGreen};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;

  a,
  span {
    color: inherit;
  }

  a {
    text-decoration: none;
  }
`;

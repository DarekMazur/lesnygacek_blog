import styled from 'styled-components';

export const StyledMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  margin: 0;

  a {
    text-decoration: none !important;
  }
`;

import styled from 'styled-components';

export const StyledButton = styled.button`
  max-width: 40rem;
  border: ${({ theme, light }) => `${light ? theme.colors.white : theme.colors.dark} solid .3rem`};
  background: transparent;
  color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.dark)};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 1rem;
  padding: 2rem;
`;

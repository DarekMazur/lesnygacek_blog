import styled from 'styled-components';

export const StyledLogo = styled.div`
  height: ${({ size }) => (size ? `${size}rem` : `10rem`)};
  width: auto;
  cursor: pointer;

  svg {
    height: 100%;

    path {
      fill: ${({ theme, light }) => (light ? (light === 'dark' ? theme.colors.dark : theme.colors.brown) : null)};
    }
  }
`;

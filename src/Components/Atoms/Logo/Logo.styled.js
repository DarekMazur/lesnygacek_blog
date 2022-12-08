import styled from 'styled-components';

export const StyledLogo = styled.div`
  height: 10rem;
  width: auto;

  svg {
    height: 100%;

    path {
      fill: ${({ theme, light }) => (light ? theme.colors.brown : null)};
    }
  }
`;
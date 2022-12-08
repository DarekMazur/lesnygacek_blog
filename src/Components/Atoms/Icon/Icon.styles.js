import styled from 'styled-components';

export const StyledIcon = styled.span`
  display: inline-block;
  height: ${({ size }) => (size === 'medium' ? `4rem` : size === 'small' ? `3rem` : `5rem`)};
  color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.dark)};
  padding: 0.5rem;
  transition: color 200ms;

  svg {
    height: 100%;
    width: auto !important;
  }

  &:hover {
    color: ${({ theme, light }) => (light ? theme.colors.brown : theme.colors.lightGreen)};
  }
`;

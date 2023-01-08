import styled from 'styled-components';

export const Span = styled.span`
  color: ${({ theme, color }) => (color ? (theme.colors[color] ? theme.colors[color] : color) : 'inherit')};
`;

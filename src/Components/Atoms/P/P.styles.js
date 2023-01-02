import styled from 'styled-components';

export const P = styled.p`
  font-size: ${({ theme, options }) => (options.size ? theme.fontSize[options.size] : theme.fontSize.m)};
  font-weight: ${({ theme, options }) => (options.weight ? theme.fontWeight[options.weight] : theme.fontWeight.regular)};
  text-align: ${({ options }) => (options.justify ? options.justify : 'left')};
  color: ${({ theme, options }) => (options.color ? (theme.colors[options.color] ? theme.colors[options.color] : options.color) : 'inherit')};
`;

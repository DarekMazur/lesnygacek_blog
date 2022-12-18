import styled from 'styled-components';

export const StyledMenuListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.subheader};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 40rem;
  color: ${({ theme, social, light }) => (social ? 'inherit' : light ? theme.colors.white : theme.colors.dark)};
  transform-origin: center;
  transition: 150ms transform ease-in, 150ms color ease-in;

  &:hover {
    transform: ${({ social }) => (social ? `scale(1)` : `scale(1.03)`)};
    font-weight: ${({ theme }) => theme.fontWeight.fat};
    color: ${({ theme, social, light }) => (social ? 'inherit' : light ? theme.colors.brown : theme.colors.lightGreen)};
  }
`;

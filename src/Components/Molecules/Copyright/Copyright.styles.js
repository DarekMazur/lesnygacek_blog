import styled from 'styled-components';

export const StyledCopyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme, pageCopy }) => (pageCopy ? theme.colors.dark : theme.colors.white)};
  font-size: ${({ theme, pageCopy }) => (pageCopy ? theme.fontSize.l : theme.fontSize.m)};
  font-weight: ${({ theme, pageCopy }) => (pageCopy ? theme.fontWeight.regular : theme.fontWeight.bold)};
`;

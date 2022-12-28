import styled from 'styled-components';

export const StyledCopyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ pageCopy }) => (pageCopy ? 'center' : 'end')};
  align-items: ${({ pageCopy }) => (pageCopy ? 'center' : 'end')};
  height: ${({ pageCopy }) => (pageCopy ? null : '100%')};
  ${'' /* height: 20rem; */}
  height: 100%;
  color: ${({ theme, pageCopy }) => (pageCopy ? theme.colors.dark : theme.colors.white)};
  font-size: ${({ theme, pageCopy }) => (pageCopy ? theme.fontSize.l : theme.fontSize.m)};
  font-weight: ${({ theme, pageCopy }) => (pageCopy ? theme.fontWeight.regular : theme.fontWeight.bold)};

  p {
    padding: 0;
    margin: 0;
  }
`;

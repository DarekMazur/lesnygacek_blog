import styled from 'styled-components';

export const StyledArticleThumbWrapper = styled.div`
  position: relative;
  width: ${({ home }) => (home ? '100%' : '80%')};
  height: ${({ home }) => (home ? 'auto' : '40rem')};
  background: ${({ home, theme }) => (home ? 'inherit' : theme.colors.dark)};
  color: ${({ home, theme }) => (home ? 'inherit' : theme.colors.white)};
  margin-top: ${({ home }) => (home ? '0' : '-5rem')};
  padding: ${({ home }) => (home ? '0' : '2rem')};
  left: 50%;
  transform: translateX(-50%);
`;

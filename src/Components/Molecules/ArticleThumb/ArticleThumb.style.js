import styled from 'styled-components';

export const StyledArticleThumb = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  width: calc((100% - 10rem) / 2);
  margin: 3rem;
`;

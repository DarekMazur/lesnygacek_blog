import styled from 'styled-components';
import icon from '../../../assets/icons/link.svg';

export const StyledArticleThumb = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  width: calc((100% - 10rem) / 2);
  margin: 3rem;
  color: inherit;
  text-decoration: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    opacity: 0;
    transition: 200ms opacity ease-in;
  }

  &::before {
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::after {
    background-color: transparent;
    content: url(${icon});
  }

  &:hover {
    &::before {
      opacity: 0.8;
    }

    &::after {
      opacity: 1;
    }
  }
`;

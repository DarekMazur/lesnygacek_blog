import styled from 'styled-components';
import icon from '../../../assets/icons/heart.svg';

export const StyledInstaThumb = styled.div`
  width: 25rem;
  height: 25rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border: ${({ theme }) => `.5rem solid ${theme.colors.dark}`};
  }

  div,
  &::before {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.dark};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 3;
    transition: 200ms opacity ease-in;
  }

  div {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    &:hover {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:hover::before {
    opacity: 0.8;
  }
`;

import styled from 'styled-components';

export const StyledTitle = styled.div`
  color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.dark)};
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 2rem;
  max-width: 40rem;
  text-align: center;

  h3 {
    width: 100%;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      border: ${({ theme }) => `1rem solid ${theme.colors.green}`};
      width: 40%;
      max-width: 4rem;
      height: calc(100% + 1rem);
      top: -1rem;
      transition: transform 300ms;
    }
    &::before {
      border-right: none;
      left: -2rem;
    }

    &::after {
      border-left: none;
      right: -2rem;
    }

    &:hover::before,
    &:hover::after {
      transform: scale(1.2);
    }
  }
`;

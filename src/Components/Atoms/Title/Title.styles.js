import styled from 'styled-components';

export const StyledTitle = styled.div`
  margin: ${({ sub }) => (sub ? `1rem` : `4rem`)};
  padding: 1rem;
  ${'' /* min-width: 25rem; */}
  ${'' /* max-width: 45rem; */}
  text-align: center;

  h3 {
    width: 100%;
    position: relative;
    color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.dark)};
    font-family: ${({ theme, sub }) => (sub ? theme.fonts.subheader : theme.fonts.header)};
    font-size: ${({ theme, sub }) => (sub ? theme.fontSize.lm : theme.fontSize.xl)};
    font-weight: ${({ theme, sub }) => (sub ? theme.fontWeight.bold : theme.fontWeight.regular)};

    &::before,
    &::after {
      display: ${({ sub }) => (sub ? `none` : `block`)};
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

    &:hover::after {
      transform: translate(3rem) scaleY(1.1);
    }

    &:hover::before {
      transform: translate(-3rem) scaleY(1.1);
    }
  }
`;

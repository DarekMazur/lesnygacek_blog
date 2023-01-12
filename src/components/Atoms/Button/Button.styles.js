import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 20rem;
  max-width: 40rem;
  height: 4rem;
  border: ${({ theme, light }) => (light ? `${theme.colors.white} solid .3rem` : `${theme.colors.dark} solid .3rem`)};
  background-color: transparent;
  color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.dark)};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 3rem 1rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  span {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    transition: transform 400ms ease-in-out;

    &:nth-child(1) {
      transform: translateY(
        ${({ isLoading, isSuccess, allowSending }) => {
          if (isLoading) return `-100%`;
          if (isSuccess && allowSending) return `-100%`;
          return `0%`;
        }}
      );
    }

    &:nth-child(2) {
      transform: translateY(
        ${({ isLoading, isSuccess, allowSending }) => {
          if (isLoading) return `0%`;
          if (isSuccess && allowSending) return `-100%`;
          return `100%`;
        }}
      );
      color: ${({ theme, light, allowSending }) =>
        light ? (allowSending ? theme.colors.dark : theme.colors.white) : allowSending ? theme.colors.white : theme.colors.dark};
      background-color: ${({ theme, light, allowSending }) => (allowSending ? (light ? theme.colors.dark : theme.colors.white) : `transparent`)};

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.dark)};
        transform: scaleX(${({ isLoading, allowSending }) => (isLoading && allowSending ? `1` : `0`)});
        opacity: ${({ isLoading }) => (isLoading ? `1` : `0`)};
        transform-origin: 0 50%;
        transition: transform 1.5s 500ms ease-out, opacity 100ms 500ms;
        z-index: -1;
      }
    }

    &:nth-child(3) {
      transform: translateY(
        ${({ isLoading, isSuccess }) => {
          if (isLoading) return `100%`;
          if (isSuccess) return `0%`;
          return `200%`;
        }}
      );
    }
  }
`;

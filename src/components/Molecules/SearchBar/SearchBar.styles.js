import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;

  span {
    transform: translateY(-0.5rem);
  }

  input {
    height: 3rem;
    transform-origin: 100% 50%;
    transform: ${({ isActive }) => (isActive ? `scaleX(1)` : `scaleX(0)`)};
    transition: 300ms transform ease-out;
  }
`;

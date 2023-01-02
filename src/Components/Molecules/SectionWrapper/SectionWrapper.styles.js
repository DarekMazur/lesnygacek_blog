import styled from 'styled-components';

export const StyledSectionWrapper = styled.section`
  display: flex;
  flex-direction: ${({ position }) => (position && position === 'right' ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background-color: ${({ theme, light }) => (light && light === 'light' ? theme.colors.white : theme.colors.dark)};
`;

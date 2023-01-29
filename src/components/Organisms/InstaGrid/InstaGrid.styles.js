import styled from 'styled-components';
import { theme } from '../../../utils/themes/theme';

export const StyledGrid = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;

  @media (min-width: ${theme.breakpoints.wide}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

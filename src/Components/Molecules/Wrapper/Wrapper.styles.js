import styled from 'styled-components';

const displayOptions = ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'flow-root', 'none'];
const directionOptions = ['row', 'row-reverse', 'column', 'column-reverse'];
const justifyOptions = ['start', 'center', 'space-between', 'space-around', 'space-evelny'];
const alignOptions = ['stretch', 'center', 'start', 'end'];

export const StyledWrapper = styled.div`
  display: ${({ display }) => (display && displayOptions.includes(display) ? display : 'flex')};
  flex-direction: ${({ display, direction }) =>
    direction && directionOptions.includes(direction) ? direction : display === 'flex' || !display ? 'row' : null};
  justify-content: ${({ align }) => (align?.justify && justifyOptions.includes(align.justify) ? align.justify : 'center')};
  align-items: ${({ align }) => (align?.align && alignOptions.includes(align.align) ? align.align : 'center')};
  max-width: ${({ contentWidth }) => (contentWidth ? contentWidth : '100%')};
  margin: ${({ contentWidth }) => (contentWidth ? null : '3rem')}; ;
`;

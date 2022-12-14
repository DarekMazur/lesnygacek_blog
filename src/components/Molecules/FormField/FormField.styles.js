import styled from 'styled-components';

export const StyledFormField = styled.div`
  width: ${({ options }) => (options?.width ? options.width : 'auto')};
  margin: 3rem;

  form {
    display: flex;
    flex-direction: column;
  }
`;

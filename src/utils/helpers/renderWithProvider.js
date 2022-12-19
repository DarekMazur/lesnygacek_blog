import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../themes/theme';
import { GlobalStyle } from '../../styles/globalStyle';

export const renderWithProvider = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';
import { renderWithProvider } from '../../../utils/helpers/renderWithProvider';
import Logo from './Logo';

const container = renderWithProvider(<Logo logo={'long'} size="8" />);
const sqareContainer = renderWithProvider(<Logo logo={'square'} />);

describe('Render logo:', () => {
  it('- logo height is compare to size prop:', () => {
    expect(screen.getByTestId('long')).toHaveStyle('height: 8rem');
  });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

describe('Render square:', () => {
  it('- logo height is compare to default size:', () => {
    renderWithProvider(<Logo logo={'square'} />);
    expect(screen.getByTestId('square')).toHaveStyle('height: 10rem');
  });

  it('- rendered component match to snapshot:', () => {
    expect(sqareContainer).toMatchSnapshot();
  });
});

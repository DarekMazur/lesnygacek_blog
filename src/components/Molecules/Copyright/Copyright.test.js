import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';
import { year } from '../../../utils/helpers/date';
import { renderWithProvider } from '../../../utils/helpers/renderWithProvider';
import Copyright from './Copyright';

const container = renderWithProvider(<Copyright pageCopy />);
const creatorContainer = renderWithProvider(<Copyright />);

describe('Render Copyright', () => {
  it('- page copyright contains year:', () => {
    expect(screen.getByTestId('page')).toContainHTML(year.toString());
  });

  it('- page copyright did not contains creator info:', () => {
    renderWithProvider(<Copyright pageCopy />);
    expect(screen.getByTestId('page')).not.toContain('created by');
  });

  it('- creator info did not contains page copyright:', () => {
    renderWithProvider(<Copyright />);
    expect(screen.getByTestId('creator')).not.toContainHTML('©');
  });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
    expect(creatorContainer).toMatchSnapshot();
  });
});

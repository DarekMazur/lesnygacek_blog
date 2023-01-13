import React from 'react';
import '@testing-library/jest-dom';
import Button from './Button';
import { fireEvent, screen } from '@testing-library/dom';
import { renderWithProvider } from '../../../utils/helpers/renderWithProvider';

const container = renderWithProvider(<Button primaryText={'Click me!'} secondaryText={'Success!'} loadingText={'Loading!'} />);

describe('Button:', () => {
  it('- cotains spans', () => {
    expect(screen.getByText('Click me!'));
    expect(screen.getByText('Success!'));
    expect(screen.getByText('Loading!'));
  });

  it('- click button:', () => {
    renderWithProvider(<Button primaryText={'Click me!'} secondaryText={'Success!'} loadingText={'Loading!'} isLoading={true} />);
    expect(screen.getByTestId('loadingSpan')).toHaveStyle('transform: translateY( 0% )');
  });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

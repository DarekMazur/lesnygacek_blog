import React from 'react';
import '@testing-library/jest-dom';
import Button from './Button';
import { renderWithProvider } from '../../../helpers/renderWithProvider';
import { fireEvent, screen } from '@testing-library/dom';

const container = renderWithProvider(<Button primaryText={'Click me!'} secondaryText={'Success!'} loadingText={'Loading!'} />);

describe('Button:', () => {
  it('- cotains spans', () => {
    expect(screen.getByText('Click me!'));
    expect(screen.getByText('Success!'));
    expect(screen.getByText('Loading!'));
  });

  it('- click button:', () => {
    renderWithProvider(<Button primaryText={'Click me!'} secondaryText={'Success!'} loadingText={'Loading!'} />);
    fireEvent.click(screen.getByText('Click me!'));
    expect(screen.getByTestId('loadingSpan')).toHaveStyle('transform: translateY( 0% )');
  });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

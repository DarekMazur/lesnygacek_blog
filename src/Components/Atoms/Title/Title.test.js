import React from 'react';
import { renderWithProvider } from '../../../helpers/renderWithProvider';
import Title from './Title';

const container = renderWithProvider(<Title>Lorem Ipsum dolor sit amet</Title>);

describe('Render FA Icon:', () => {
  renderWithProvider(<Title>Lorem Ipsum dolor sit amet</Title>);

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

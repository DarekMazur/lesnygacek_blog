import React from 'react';
import { renderWithProvider } from '../../../helpers/renderWithProvider';
import Logo from './Logo';

const container = renderWithProvider(<Logo logo={'long'} />);
// const customContainer = renderWithProvider(<Icon iconType="axe" size="default" />);

describe('Render FA Icon:', () => {
  renderWithProvider(<Logo logo={'long'} />);

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

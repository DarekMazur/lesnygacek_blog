import React from 'react';
import { renderWithProvider } from '../../../helpers/renderWithProvider';
import Icon from './Icon';

const container = renderWithProvider(<Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} light size="default" />);
// const customContainer = renderWithProvider(<Icon iconType="axe" size="default" />);

describe('Render FA Icon:', () => {
  it('- rendered component match to snapshot:', () => {
    renderWithProvider(<Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} light size="default" />);
    expect(container).toMatchSnapshot();
  });
});

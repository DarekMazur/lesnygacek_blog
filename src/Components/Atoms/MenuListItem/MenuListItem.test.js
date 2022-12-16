import React from 'react';
import { renderWithProvider } from '../../../helpers/renderWithProvider';
import MenuListItem from './MenuListItem';

const container = renderWithProvider(<MenuListItem>Item</MenuListItem>);

describe('Render FA Icon:', () => {
  renderWithProvider(<MenuListItem logo={'long'} />);

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

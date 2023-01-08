import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';
import { renderWithProvider } from '../../../utils/helpers/renderWithProvider';
import MenuListItem from './MenuListItem';

const container = renderWithProvider(<MenuListItem>Item</MenuListItem>);
const iconContainer = renderWithProvider(<MenuListItem social="youtube" light />);

describe('Render menu list item:', () => {
  it('- list item default color:', () => {
    expect(screen.getByText('Item')).toHaveStyle('color: #444444');
  });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

describe('Render menu list item light:', () => {
  it('- list item light color:', () => {
    renderWithProvider(<MenuListItem light>Item 2</MenuListItem>);
    expect(screen.getByText('Item 2')).toHaveStyle('color: #EFEFEF');
  });
});

describe('Render menu list icon:', () => {
  it('- list item icon color:', () => {
    renderWithProvider(<MenuListItem social="youtube" />);
    expect(screen.getByTestId('youtube')).toHaveStyle('color: inherit');
  });

  it('- rendered component match to snapshot:', () => {
    expect(iconContainer).toMatchSnapshot();
  });
});

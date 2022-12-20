import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { renderWithProvider } from '../../../helpers/renderWithProvider';
import Category from './Category';
import { categoryIcon, categoryTitle } from '../../../utils/helpers/category';

const container = renderWithProvider(<Category category="tools" />);

describe('Render Category component: ', () => {
  it('- category prop generates propper icon and title', () => {
    expect(categoryTitle.tools).toBe('Narzędzia');
    expect(categoryIcon.tools).toBe('axe');

    expect(categoryTitle.trips).toBe('Wyprawy');
    expect(categoryIcon.trips.toString()).toBe(['fas', 'hiking'].toString());

    expect(categoryTitle.thoughts).toBe('Przemyślenia');
    expect(categoryIcon.thoughts).toBe('campfire');

    expect(categoryTitle.others).toBe('Inne');
    expect(categoryIcon.others).toBe('backpack');
  });

  it('- default color without prop light', () => {
    renderWithProvider(<Category category="tools" />);
    expect(screen.getByTestId('tools')).toHaveStyle('color: inherit');
  });

  it('- color change with prop light', () => {
    renderWithProvider(<Category category="tools" light />);
    expect(screen.getByTestId('tools')).toHaveStyle('color: #EFEFEF');
  });

  it('- contains category title', () => {
    renderWithProvider(<Category category="tools" />);
    expect(screen.getByTestId('tools')).toContainHTML('Narzędzia');
  });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { renderWithProvider } from '../../../utils/helpers/renderWithProvider';
import Category from './Category';
import { categoryIcon } from '../../../utils/helpers/category';

const container = renderWithProvider(<Category category={{ title: 'Narzędzia', defaultIcon: 'tools' }} />);

describe('Render Category component: ', () => {
  it('- category prop generates propper icon and title', () => {
    expect(categoryIcon.tools).toBe('axe');

    expect(categoryIcon.trips.toString()).toBe(['fas', 'hiking'].toString());

    expect(categoryIcon.thoughts).toBe('campfire');

    expect(categoryIcon.others).toBe('backpack');
  });

  it('- default color without prop light', () => {
    renderWithProvider(<Category category={{ title: 'Narzędzia', defaultIcon: 'tools' }} />);
    expect(screen.getByTestId('tools')).toHaveStyle('color: inherit');
  });

  it('- color change with prop light', () => {
    renderWithProvider(<Category category={{ title: 'Narzędzia', defaultIcon: 'tools' }} light />);
    expect(screen.getByTestId('tools')).toHaveStyle('color: #EFEFEF');
  });

  it('- contains category title', () => {
    renderWithProvider(<Category category={{ title: 'Narzędzia', defaultIcon: 'tools' }} />);
    expect(screen.getByTestId('tools')).toContainHTML('Narzędzia');
  });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

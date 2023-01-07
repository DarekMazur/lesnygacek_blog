import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';
import { renderWithProvider } from '../../../utils/helpers/renderWithProvider';
import ArticleDetails from './ArticleDetails';

const container = renderWithProvider(<ArticleDetails date={'2022-08-02T12:01:28.266Z'} title={'Lorem Ipsum'} category={'tools'} />);

describe('Render ArticleDetails', () => {
  it('- use props:', () => {
    expect(screen.getByTestId('Lorem Ipsum')).toContainHTML('02.08.2022');
    expect(screen.getByTestId('Lorem Ipsum')).toContainHTML('Lorem Ipsum');
    expect(screen.getByTestId('Lorem Ipsum')).toContainHTML('</svg>');
    expect(screen.getByTestId('Lorem Ipsum')).toContainHTML('Narzędzia');
  });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

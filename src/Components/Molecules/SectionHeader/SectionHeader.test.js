import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';
import { renderWithProvider } from '../../../utils/helpers/renderWithProvider';
import SectionHeader from './SectionHeader';

const container = renderWithProvider(
  <SectionHeader title={'Dolor Sit Amet'}>
    <div>
      <p>Lorem Ipsum Dolor Sita Amet</p>
    </div>
  </SectionHeader>
);

describe('Render component SectionHeader', () => {
  it('- componenet contains props:', () => {
    expect(screen.getByTestId('sectionHeader')).toContainHTML('</h3>');
    expect(screen.getByTestId('sectionHeader')).toContainHTML('Lorem Ipsum');
  });
  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

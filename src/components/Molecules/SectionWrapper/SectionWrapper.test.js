import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';
import { renderWithProvider } from '../../../utils/helpers/renderWithProvider';
import SectionWrapper from './SectionWrapper';

const container = renderWithProvider(
  <SectionWrapper title={'Dolor Sit Amet'}>
    <div>
      <p>Lorem Ipsum Dolor Sita Amet</p>
    </div>
  </SectionWrapper>
);

describe('Render component SectionWrapper', () => {
  it('- componenet contains props:', () => {
    expect(screen.getByTestId('SectionWrapper')).toContainHTML('</h3>');
    expect(screen.getByTestId('SectionWrapper')).toContainHTML('Lorem Ipsum');
  });
  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

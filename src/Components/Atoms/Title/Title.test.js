import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';
import { renderWithProvider } from '../../../utils/helpers/renderWithProvider';
import Title from './Title';

const container = renderWithProvider(<Title>Title</Title>);
const subContainer = renderWithProvider(
  <Title light sub>
    Subtitle
  </Title>
);

describe('Render Title:', () => {
  it('- font family:', () => {
    expect(screen.getByText('Title')).toHaveStyle('font-family: "Holtwood One SC",serif');
  });

  it('- font size:', () => {
    renderWithProvider(<Title>Title</Title>);
    expect(screen.getByText('Title')).toHaveStyle('font-size: 4rem');
  });

  it('- default color:', () => {
    renderWithProvider(<Title>Title</Title>);
    expect(screen.getByText('Title')).toHaveStyle('color: #444444');
  });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

describe('Render Subtitle:', () => {
  it('- font family:', () => {
    renderWithProvider(
      <Title light sub>
        Subtitle
      </Title>
    );
    expect(screen.getByText('Subtitle')).toHaveStyle('font-family: "Cormorant Unicase",serif');
  });

  it('- font size:', () => {
    renderWithProvider(
      <Title light sub>
        Subtitle
      </Title>
    );
    expect(screen.getByText('Subtitle')).toHaveStyle('font-size: 1.8rem');
  });

  it('- light color:', () => {
    renderWithProvider(
      <Title light sub>
        Subtitle
      </Title>
    );
    expect(screen.getByText('Subtitle')).toHaveStyle('color: #EFEFEF');
  });

  it('- rendered component match to snapshot:', () => {
    expect(subContainer).toMatchSnapshot();
  });
});

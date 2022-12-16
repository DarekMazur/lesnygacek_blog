import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import React from 'react';
import { renderWithProvider } from '../../../helpers/renderWithProvider';
import Icon from './Icon';

const container = renderWithProvider(<Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} light size="default" />);
const customContainer = renderWithProvider(<Icon iconType="axe" size="default" />);

describe('Render FA Icon:', () => {
  it('- icon is in rendered component:', () => {
    expect(screen.getByTestId('fab,facebook-messenger')).toBeInTheDocument();
  });

  // it('- change icon on hover:', () => {
  //   renderWithProvider(<Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} light size="default" />);
  //   const icon = screen.getByTestId('fab,facebook-messenger');

  //   expect(icon).toHaveStyle('color: #EFEFEF');
  //   fireEvent.mouseEnter(icon);
  //   expect(icon).toHaveStyle('color: #93806F');
  //   fireEvent.mouseLeave(icon);
  //   expect(icon).toHaveStyle('color: #EFEFEF');
  // });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

describe('Render Custom Icon:', () => {
  renderWithProvider(<Icon iconType="axe" size="default" />);

  it('- rendered component with custom icon match to snapshot:', () => {
    expect(customContainer).toMatchSnapshot();
  });
});

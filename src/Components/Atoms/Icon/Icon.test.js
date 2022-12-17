import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import React from 'react';
import { renderWithProvider } from '../../../helpers/renderWithProvider';
import Icon from './Icon';

const container = renderWithProvider(<Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} light size="medium" />);
const customContainer = renderWithProvider(<Icon iconType="axe" size="default" />);

describe('Render FA Icon:', () => {
  it('- icon is in rendered component:', () => {
    expect(screen.getByTestId('fab,facebook-messenger')).toBeInTheDocument();
  });

  it('- check icon light version:', () => {
    renderWithProvider(<Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} light size="medium" />);

    expect(screen.getByTestId('fab,facebook-messenger')).toHaveStyle('color: #EFEFEF');
  });

  it('- check icon size version:', () => {
    renderWithProvider(<Icon icon={'fa'} iconType={['fab', 'facebook-messenger']} light size="medium" />);

    expect(screen.getByTestId('fab,facebook-messenger')).toHaveStyle('height: 4rem');
  });

  it('- rendered component match to snapshot:', () => {
    expect(container).toMatchSnapshot();
  });
});

describe('Render Custom Icon:', () => {
  renderWithProvider(<Icon iconType="axe" size="default" />);

  it('- check icon default/dark version:', () => {
    renderWithProvider(<Icon iconType="axe" size="default" />);

    expect(screen.getByTestId('axe')).toHaveStyle('color: #444');
  });

  it('- check icon size version:', () => {
    renderWithProvider(<Icon iconType="axe" size="default" />);

    expect(screen.getByTestId('axe')).toHaveStyle('height: 5rem');
  });

  it('- rendered component with custom icon match to snapshot:', () => {
    expect(customContainer).toMatchSnapshot();
  });
});

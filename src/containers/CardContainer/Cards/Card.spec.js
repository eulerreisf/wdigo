import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card component test', () => {
  it('Should be render Card component', () => {
    const component = renderComponent();
    expect(component).toBeDefined();
  });
});


const renderComponent = () => render(<Card />);
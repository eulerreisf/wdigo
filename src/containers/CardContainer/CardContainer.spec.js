import React from 'react';
import { render } from '@testing-library/react';
import CardContainer from './CardContainer';

describe('CardContainer component test', () => {
  it('Should be render CardContainer component', () => {
    const component = renderComponent();
    expect(component).toBeDefined();
  });
});


const renderComponent = () => render(<CardContainer />);
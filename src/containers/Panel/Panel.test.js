//React
import React from 'react';

//RTL
import { render } from '@testing-library/react';

//Component
import Panel from './Panel';

describe('PanelContainer', () => {
  it('Should render Panel Container', () => {
    const component = renderComponent();
    expect(component).toBeDefined();
  });
});


const renderComponent = props => render(<Panel />);
import { render } from '@testing-library/react';

import Leftnav from './leftnav';

describe('Leftnav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Leftnav />);
    expect(baseElement).toBeTruthy();
  });
});

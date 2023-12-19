import { render } from '@testing-library/react';

import OffCanvas from './offCanvas';

describe('OffCanvas', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OffCanvas />);
    expect(baseElement).toBeTruthy();
  });
});

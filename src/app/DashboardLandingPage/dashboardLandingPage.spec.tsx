import { render } from '@testing-library/react';

import DashboardLandingPage from './dashboardLandingPage';

describe('DashboardLandingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardLandingPage />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import SettingsPage from './settingsPage';

describe('SettingsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsPage />);
    expect(baseElement).toBeTruthy();
  });
});

import styled from 'styled-components';
import Layout from './layout/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLandingPage from './DashboardLandingPage/dashboardLandingPage';
import SettingsPage from './SettingsPage/settingsPage';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardLandingPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

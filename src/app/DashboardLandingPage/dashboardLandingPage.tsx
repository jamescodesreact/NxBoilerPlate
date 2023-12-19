import styled from 'styled-components';
import React, { useState } from 'react';
import { OffCanvas } from '../OffCanvas/offCanvas';
/* eslint-disable-next-line */
export interface DashboardLandingPageProps {}

const StyledDashboardLandingPage = styled.div`
  color: pink;
`;

export function DashboardLandingPage(props: DashboardLandingPageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <StyledDashboardLandingPage>
      <h1>Welcome to DashboardLandingPage!</h1>
      <button onClick={toggleOffcanvas}>X</button>
      <OffCanvas
        open={isOpen}
        onClose={toggleOffcanvas}
        direction="right"
        width="300px"
      >
        // offcanvas content
      </OffCanvas>
    </StyledDashboardLandingPage>
  );
}

export default DashboardLandingPage;

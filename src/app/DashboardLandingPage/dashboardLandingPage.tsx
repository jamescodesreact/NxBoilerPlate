import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DashboardLandingPageProps {}

const StyledDashboardLandingPage = styled.div`
  color: pink;
`;

export function DashboardLandingPage(props: DashboardLandingPageProps) {
  return (
    <StyledDashboardLandingPage>
      <h1>Welcome to DashboardLandingPage!</h1>
    </StyledDashboardLandingPage>
  );
}

export default DashboardLandingPage;

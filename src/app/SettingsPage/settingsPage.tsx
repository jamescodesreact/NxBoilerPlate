import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SettingsPageProps {}

const StyledSettingsPage = styled.div`
  color: pink;
`;

export function SettingsPage(props: SettingsPageProps) {
  return (
    <StyledSettingsPage>
      <h1>Welcome to SettingsPage!</h1>
    </StyledSettingsPage>
  );
}

export default SettingsPage;

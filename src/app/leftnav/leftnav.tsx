import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LeftnavProps {}

const StyledLeftNav = styled.div`
  color: pink;
`;

export function LeftNav(props: LeftnavProps) {
  return (
    <StyledLeftNav>
      <h1>Welcome to Leftnav!</h1>
    </StyledLeftNav>
  );
}

export default LeftNav;

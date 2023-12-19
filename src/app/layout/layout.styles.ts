import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100%;
`;

export const LeftNav = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 10px;

  a {
    color: #333;
    text-decoration: none;

    &.active {
      color: blue;
    }
  }
`;

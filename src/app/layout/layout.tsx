import { NavLink, Outlet } from 'react-router-dom';
import {
  Container,
  LeftNav,
  MainContainer,
  Menu,
  MenuItem,
} from './layout.styles';
import styled from 'styled-components';

export default function Layout() {
  return (
    <Container>
      <LeftNav>
        Menu
        <div>
          <Menu>
            <MenuItem>
              <NavLink to="/">Dashboard</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/settings">Settings</NavLink>
            </MenuItem>
          </Menu>
        </div>
      </LeftNav>

      <MainContainer>
        <Outlet />
      </MainContainer>
    </Container>
  );
}

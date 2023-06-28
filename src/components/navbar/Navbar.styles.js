import styled from "styled-components"
import {NavLink} from "react-router-dom";

export const NavigationBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  height: 10vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: transparent;

  h1 {
    font-size: 1.5rem;
    color: var(--white);
  }

  ul {
    text-decoration: none;
    list-style: none;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const NavLinks = styled(NavLink)`
  color: var(--white);
`
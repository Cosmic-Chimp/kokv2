import React from "react";
import { Nav, NavLink, Bars, NavMenu, Logo } from "./NavbarElements";
// import logo from "../assets/KomOnsKook (@kom.png";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <Logo />
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/recipes" activeStyle>
            Recipes
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

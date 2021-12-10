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
          <NavLink to="home" spy={true} delay={300} smooth={true}>
            Home
          </NavLink>
          <NavLink to="about" spy={true} delay={300} smooth={true}>
            About
          </NavLink>
          <NavLink to="recipes" spy={true} delay={300} smooth={true}>
            Recipes
          </NavLink>
          <NavLink to="footer" spy={true} delay={300} smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

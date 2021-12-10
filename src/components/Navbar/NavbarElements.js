import styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import logo from "../assets/KoK.svg"; // choose between this sv and png image

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  position: absolute;
  top: 0;
  left: 3%;
  width: 120;
  height: 100%;
  padding: none;
`;

export const Nav = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: #ffffff;
  height: 3vh;
  display: flex;
  justify-content: flex-end;
  padding: 30px 5%;
  z-index: 10;
  margin-right: auto;
`;
export const NavLink = styled(Link)`
  color: #363737;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* padding: 0 0.25rem; */
  height: 100%;
  cursor: pointer;
  font-family: "Roboto";
  font-size: 1.3rem;
  /* border-top: 2px solid black;
  border-bottom: 2px solid black; */
  padding: 0px 5px;
  &:after {
    content: "";
    background: #363737;
    margin: 20px;
    height: 1em;
    width: 2px;
    &:active {
      background: #e87da3;
    }
  }
  &:hover {
    text-decoration: underline black 5%;
  }
  &.active {
    color: #e87da3;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #363737;

  @media screen and (max-width: 926px) {
    /* display: block; */
    display: flex;
    justify-self: center;
    align-self: center;
    float: right;
    /* top: 20%; */
    padding: 0.5rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: -24px; */

  @media screen and (max-width: 926px) {
    display: none;
  }
`;

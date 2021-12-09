import styled from "styled-components";
// the images are gonna be hardcode for now,
//  ask Chris/Matt about how to change the img relative
// to what my mom post via admin pannel
import { FaInstagramSquare, FaFacebookF } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

export const BgContainer = styled.div.attrs({
  id: `footer`,
})`
  width: auto;
  height: fit-content;
  background-color: #e87da3;
  display: flex;
  padding: 5%;
  flex-direction: column;
`;

export const FooterH1 = styled.h1`
  margin: 0 auto;
  color: white;
`;
export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const IgIcon = styled(FaInstagramSquare)`
  padding: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  color: #f6e9ee;
`;
export const FbIcon = styled(FaFacebookF)`
  padding: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  color: #f6e9ee;
`;
// export const MailIcon = styled(AiOutlineMail)``;

export const LinkDiv = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterLink = styled(Link)`
  color: #363737;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.25rem;
  height: 100%;
  cursor: pointer;
  font-family: "Roboto";
  font-size: 1.3rem;

  &.active {
    color: #e87da3;
  }
`;
export const Li = styled.a`
  padding: 8px;
  margin: 3.5rem 0px;
`;

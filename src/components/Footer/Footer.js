import React from "react";
import {
  BgContainer,
  FooterH1,
  IgIcon,
  FbIcon,
  // MailIcon,
  IconDiv,
  // FooterLink,
  LinkDiv,
  Li,
} from "./FooterStyled";
const Footer = () => {
  return (
    <>
      <BgContainer>
        <FooterH1>Contact Me</FooterH1>
        <LinkDiv>
          {/* <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/recipes">Recipes</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink> */}
          <Li>Home |</Li>
          <Li>About |</Li>
          <Li>Recipes |</Li>
          <Li>Contact </Li>
        </LinkDiv>

        <IconDiv>
          <IgIcon />
          <FbIcon />
          {/* <MailIcon /> */}
        </IconDiv>
      </BgContainer>
    </>
  );
};

export default Footer;

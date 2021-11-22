import React from "react";
import {
  BgContainer,
  FooterH1,
  IgIcon,
  FbIcon,
  // MailIcon,
  IconDiv,
} from "./FooterStyled";
const Footer = () => {
  return (
    <>
      <BgContainer>
        <FooterH1>Contact Me</FooterH1>
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

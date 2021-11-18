import React from "react";
import {
  ContainerDiv,
  AboutText,
  AboutPic,
  AboutPar,
  HeaderTwo,
} from "./AboutStyled";

const About = () => {
  return (
    <div>
      <HeaderTwo>HeaderBoi</HeaderTwo>
      {/* perhaps try creating above element as separate component */}
      <ContainerDiv>
        <AboutText>
          <h3>Hiya!</h3>
          {/* change h3 above to a component */}
          <AboutPar>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            soluta, optio animi laboriosam fuga eius corporis eaque facere et
            est dolores assumenda vel explicabo ex repellendus nam tenetur ea
            suscipit.
          </AboutPar>
        </AboutText>
        <AboutPic></AboutPic>
      </ContainerDiv>
    </div>
  );
};

export default About;

import React from "react";
import {
  LeftTextDiv,
  OuterDiv,
  RightImgDiv,
  LeftWrapper,
  AbtPar,
  IgIcon,
  FbIcon,
} from "./Abtv2Styled";

const AbtV2 = () => {
  return (
    <>
      {/* <h1>Heading 1</h1> */}
      <OuterDiv>
        <LeftTextDiv>
          <LeftWrapper>
            <h1>About Me</h1>
            {/* <div className="contain">
              <div className="items">Fb</div>
              <div className="items">IG</div>
              <div className="items">Twitter</div>
            </div> */}
          </LeftWrapper>
        </LeftTextDiv>
        <RightImgDiv></RightImgDiv>
      </OuterDiv>
      <AbtPar>
        <h1>Hiya</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia soluta,
          optio animi laboriosam fuga eius corporis eaque facere et est dolores
          assumenda vel explicabo ex repellendus nam tenetur ea suscipit. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Quia soluta, optio
          animi laboriosam fuga eius corporis eaque facere et est dolores
        </p>

        {/* insert icons to socials here */}
        <h4>Give me a follow!</h4>
        <IgIcon />
        <FbIcon />
        {/* <div className="contain">
          <div className="items">Fb</div>
          <div className="items">IG</div>
          <div className="items">Twitter</div>
        </div> */}
      </AbtPar>
    </>
  );
};

export default AbtV2;

import React from "react";
import {
  LeftTextDiv,
  OuterDiv,
  RightImgDiv,
  LeftWrapper,
  IntroPar,
} from "./BannerStyled";

const Banner = () => {
  return (
    <>
      {/* <h1>Heading 1</h1> */}
      <OuterDiv>
        <LeftTextDiv>
          <LeftWrapper>
            <h1>Welkom By KomOnsKook</h1>
            <IntroPar className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              soluta, optio animi laboriosam fuga eius corporis eaque facere et
              est dolores assumenda vel explicabo ex repellendus nam tenetur ea
              suscipit.
            </IntroPar>
          </LeftWrapper>
        </LeftTextDiv>
        <RightImgDiv></RightImgDiv>
      </OuterDiv>
    </>
  );
};

export default Banner;

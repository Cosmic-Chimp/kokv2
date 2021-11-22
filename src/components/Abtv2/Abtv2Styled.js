import styled from "styled-components";
import abtPic from "../assets/biopic.png";
export const OuterDiv = styled.div`
  display: flex;
  height: 50vh;
  width: auto;
  padding: 5rem;
  padding-top: 2rem !important;
  padding-bottom: 0px !important;
  margin: 10px;
  @media all and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const LeftWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 50px;
  height: fit-content;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  @media all and (max-width: 480px) {
    padding-right: 0px;
  }
`;
// styling for left div containing heading etc//
export const LeftTextDiv = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  width: auto;
  height: 100%;
  padding: 0px 0px;
  margin: 0;
`;

export const RightImgDiv = styled.img.attrs({
  src: `${abtPic}`,
})`
  width: 100%;
  height: fit-content;
  flex: 1;
  object-fit: contain;
  border-radius: 50%;
  /* box-shadow: 0px 0px 50px 5px grey; */
`;

export const AbtPar = styled.div`
  width: fit-content;
  /* background-color: white; */
  padding: 5%;
`;

// export const IconContainer = styled.div``;
// export const Icon = styled(FaBars)`` this will be the icon 4 socials

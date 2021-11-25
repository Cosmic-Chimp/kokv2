import styled from "styled-components";
import abtPic from "../assets/biopic.png";
import { FaInstagramSquare, FaFacebookF } from "react-icons/fa";

export const OuterDiv = styled.div`
  display: flex;
  /* justify-content: center; */
  height: 50vh;
  width: auto;
  padding: 5rem;
  /* flex-direction: row-reverse; */
  padding-top: 2rem !important;
  padding-bottom: 0px !important;
  /* margin: 2rem; */
  @media all and (max-width: 480px) {
    flex-direction: column;
  }
  @media all and (min-width: 1280px) {
    margin: 3rem;
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
  display: flex;
  justify-self: center;
  align-self: center;
  /* box-shadow: 0px 0px 30px 5px whitesmoke; */
`;

export const AbtPar = styled.div`
  width: fit-content;
  /* background-color: white; */
  padding: 5%;
`;

// export const IconContainer = styled.div``;
// export const Icon = styled(FaBars)`` this will be the icon 4 socials

export const IgIcon = styled(FaInstagramSquare)`
  padding: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  color: #ff9abe;
  &:hover {
    box-shadow: 1px 1px 4px black;
    border-radius: 5%;
  }
`;
export const FbIcon = styled(FaFacebookF)`
  padding: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  color: #ff9abe;
  &:hover {
    box-shadow: 1px 1px 4px black;
    border-radius: 5%;
  }
`;

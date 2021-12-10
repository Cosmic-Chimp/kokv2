import styled from "styled-components";
import weddingImg from "../assets/weddingC.png";
export const OuterDiv = styled.div.attrs({
  id: `home`,
})`
  display: flex;
  height: 50vh;
  width: auto;
  margin: 5rem;
  /* margin-top: 0px !important;
  padding-top: 5rem; */
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
  flex-direction: column;
  @media all and (max-width: 480px) {
    align-items: center;
    text-align: center;
    justify-content: center;
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

export const IntroPar = styled.div`
  padding: none;
  margin: none;
  @media all and (max-width: 926px) {
    display: none;
    visibility: hidden;
  }
`;

// styling for right div containing image//
// export const RightImgDiv = styled.div`
//   flex: 1;
//   width: auto;
//   height: auto;
// `;

export const RightImgDiv = styled.img.attrs({
  src: `${weddingImg}`,
})`
  width: 100%;
  height: auto;
  flex: 1;
  object-fit: contain;

  /* box-shadow: 0px 50px 50px 60px; */
  /* margin: 2.5rem; */
`;
/* flex: 0.5; */

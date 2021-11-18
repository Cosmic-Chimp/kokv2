import styled from "styled-components";
import bio from "../assets/biopic.png";
export const ContainerDiv = styled.div`
  display: flex;
  height: 50vh;
  width: auto;
  @media all and (max-width: 480px) {
    flex-direction: column-reverse;
    /* padding-top: 50vmax; */
  }
  /* background-color: grey; */
`;

export const AboutText = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* flex: 1; */
  width: fit-content;
  height: 100%;
`;

// export const WrapperLeft = styled.div`
//   padding: 50px;
//   height: fit-content;
//   display: flex;
//   flex-direction: column;
//   @media all and (max-width: 480px) {
//     padding: 10px;
//     align-items: center;
//     text-align: center;
//     justify-content: center;
//   }
// `;
export const AboutPic = styled.img.attrs({
  src: `${bio}`,
})`
  max-width: 100%;
  height: auto;
  /* box-shadow: 0px 50px 50px 60px; */
  border-radius: 50%;
  margin: 2.5rem;
  /* flex: 0.5; */
`;

export const AboutPar = styled.p`
  padding: 10px;
  margin: none;
  text-align: justify;
  overflow-wrap: break-word;
`;

export const HeaderTwo = styled.h2`
  display: flex;
  justify-content: center;
  margin: 50px;
  border: 5px solid black;
  padding: 60px;
`;

// try making a heading container and then use the - auto margin on that

import styled from "styled-components";
/// this is hardcoded for testing purposes//
/// will have to refactor so that img src etc is changed
/// relative to what adminuploads from admin pannel///

import { FaArrowRight } from "react-icons/fa";
// container for posts//
export const PinkBg = styled.div.attrs({
  id: `recipes`,
})`
  width: 100%;
  height: 100%;
  background-color: #f5c3d7;
  margin: 3rem 0px;
`;

export const RecipeH1 = styled.h1`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0.5em;
`;

export const Postcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f5c3d7;
  height: auto;
  margin: 1rem 0px;
  gap: 15px 0px;
`;

export const RecipeCard = styled.div`
  display: flex;
  min-height: 15em;
  min-width: 15rem;
  flex-wrap: 1;
  margin: 10px;
  background-color: honeydew;
  /* flex: 0 1 200px; */
  background-image: url(${({ background }) => background});
  background-size: cover;
  /* box-shadow: 1px 1px 10px 3px rgb(246, 233, 238, 0.8); */
`;

export const RecipeTitle = styled.h3`
  position: relative;
  margin: 0 auto;
  background-color: rgb(246, 233, 238, 0.3);
  height: fit-content;
  padding: 0.5rem 0px;
  width: 100%;
  text-align: center;
  color: black;
  text-shadow: 1px 0.5px #363737;
  font-family: "Roboto";
`;
// export const ItemPic = styled.div`
//   height: 50%;
//   background-image: url(${({ background }) => background});
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

export const Go2RoC = styled.button`
  font-family: "Montserrat";
  font-weight: 700;
  position: relative;
  top: 0;
  left: 0.5rem;
  height: fit-content;
  padding: 0.5rem 0.5rem;
  width: fit-content;
  text-align: center;
  color: #e87da3;
  background-color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const CmoreCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SeeMore = styled.button`
  border: none;
  height: fit-content;
  width: fit-content;
  padding: 1rem 1rem;
  font-family: "Montserrat";
  margin: 2rem;
  background-color: #e87da3;
  color: #363737;
  cursor: pointer;
`;

export const FaArrow = styled(FaArrowRight)`
  display: inline;
  font-size: 1.2em;
  background-color: grey;
  margin-left: 1em;
  background: none;
  width: fit-content;
  height: fit-content;
  padding: 0.5em 0.5em;
`;

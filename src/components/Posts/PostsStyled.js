import styled from "styled-components";
/// this is hardcoded for testing purposes//
/// will have to refactor so that img src etc is changed
/// relative to what adminuploads from admin pannel///

// container for posts//
export const PinkBg = styled.div`
  width: 100%;
  height: fit-content;
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
  top: 83%;
  background-color: rgb(246, 233, 238, 0.8);
  height: fit-content;
  padding: 0.5rem 0px;
  width: 100%;
  text-align: center;
  color: #363737;
`;
// export const ItemPic = styled.div`
//   height: 50%;
//   background-image: url(${({ background }) => background});
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

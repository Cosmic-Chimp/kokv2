import React from "react";
import {
  CmoreCont,
  PinkBg,
  Postcontainer,
  RecipeH1,
  SeeMore,
  FaArrow,
} from "./PostsStyled";
import RecipeBP from "./RecipeCardV2";
// import all images her(this is hardcoding the srcs)
import Cake from "../assets/weddingC.png";
import Choc from "../assets/chocCake.png";
import Hertzog from "../assets/hertzoggies.png";

const Posts = () => {
  return (
    <>
      <PinkBg>
        <RecipeH1>Recipes</RecipeH1>
        <Postcontainer>
          <RecipeBP background={Cake} />
          <RecipeBP background={Choc} />
          <RecipeBP background={Hertzog} />
          {/* <RecipeBP background={Cake} />
          <RecipeBP background={Cake} /> */}
        </Postcontainer>
        <CmoreCont>
          <SeeMore>
            Read more recipes
            {/* <FaArrow /> */}
          </SeeMore>
        </CmoreCont>
      </PinkBg>
    </>
  );
};

export default Posts;

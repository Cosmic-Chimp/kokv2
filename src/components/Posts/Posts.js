import React from "react";
import {
  PinkBg,
  Postcontainer,
  RecipeCard,
  RecipeH1,
  RecipeTitle,
} from "./PostsStyled";

// import all images her(this is hardcoding the srcs)
import Cake from "../assets/weddingC.png";

const Posts = () => {
  return (
    <>
      <PinkBg>
        <RecipeH1>Recipes</RecipeH1>
        <Postcontainer>
          <RecipeCard background={Cake}>
            <RecipeTitle>Title</RecipeTitle>
          </RecipeCard>
          <RecipeCard background={Cake}>
            <RecipeTitle>Title</RecipeTitle>
          </RecipeCard>
          <RecipeCard background={Cake}>
            <RecipeTitle>Title</RecipeTitle>
          </RecipeCard>
          <RecipeCard background={Cake}>
            <RecipeTitle>Title</RecipeTitle>
          </RecipeCard>
          <RecipeCard background={Cake}>
            <RecipeTitle>Title</RecipeTitle>
          </RecipeCard>
        </Postcontainer>
      </PinkBg>
    </>
  );
};

export default Posts;

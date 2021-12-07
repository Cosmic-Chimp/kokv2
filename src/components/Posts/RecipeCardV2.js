import React from "react";

import { RecipeCard, RecipeTitle, Go2RoC, FaArrow } from "./PostsStyled";
const RecipeBP = ({ background }) => {
  return (
    <div>
      <RecipeCard background={background}>
        <RecipeTitle>Title</RecipeTitle>
      </RecipeCard>
      <Go2RoC className="go2R">
        Go to Recipe
        {/* <FaArrow /> */}
      </Go2RoC>
    </div>
  );
};

export default RecipeBP;

// go to recipe on click div

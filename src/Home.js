import React from "react";
import RecipeCard from "./RecipeCard";

export default ({ filteredRecipes }) => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-3 recipeCards d-flex justify-content-center flex-wrap w-100">
          {filteredRecipes?.map((recipe) => (
            <RecipeCard key={recipe.recipeUrl} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

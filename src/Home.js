import React from "react";
import RecipeCard from "./RecipeCard";

export default ({ filteredRecipes }) => {
  return (
    <div>
      {filteredRecipes?.map((recipe) => (
        <RecipeCard key={recipe.recipeUrl} recipe={recipe} />
      ))}
    </div>
  );
};

import React from "react";
import RecipeCard from "./RecipeCard";

export default ({ filteredRecipes }) => {
  return (
    <div>
      {filteredRecipes?.map((recipe) => (
        <RecipeCard key={recipe.recipePicture?.sys.id} recipe={recipe} />
      ))}
    </div>
  );
};

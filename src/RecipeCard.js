import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <img
        src={
          "https:" +
          recipe.recipeImg.file.url +
          "?fit=thumb&f=top_left&h=200&w=200&r=180"
        }
      />
      <h2>{recipe.recipeTitle}</h2>
      <p>{recipe.shortDescription}</p>
      <p>{recipe.longDescription}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredient.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ul>
        {recipe.steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;

import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <img
        src={
          "https:" +
          recipe.fields.recipePicture?.fields.file.url +
          "?fit=thumb&f=top_left&h=200&w=200&r=180"
        }
      />
      <h2>{recipe.fields.recipeTitle}</h2>
      <p>{recipe.fields.shortDescription}</p>
      <p>{recipe.fields.longDescription}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.fields.ingredient?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ul>
        {recipe.fields.steps?.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;

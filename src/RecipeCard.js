import React, { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const [isActive, setIsActive] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsActive(!isActive);
  }

  if (isActive) {
    return (
      <div onClick={handleClick}>
        <img
          src={
            "https:" +
            recipe.recipeImg?.file.url +
            "?fit=thumb&f=top_left&h=200&w=200&r=180"
          }
        />
        <h2>{recipe.recipeTitle}</h2>
        <p>{recipe.shortDescription}</p>
        <p>{recipe.longDescription}</p>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredient?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <h3>Steps</h3>
        <ul>
          {recipe.steps?.map((step) => (
            <li>{step}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div onClick={handleClick}>
        <img
          src={
            "https:" +
            recipe.recipeImg?.file.url +
            "?fit=thumb&f=top_left&h=200&w=200&r=180"
          }
        />
        <h2>{recipe.recipeTitle}</h2>
        <p>{recipe.shortDescription}</p>
      </div>
    );
  }
};

export default RecipeCard;

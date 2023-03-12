import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const [isActive, setIsActive] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsActive(!isActive);
  }

  if (isActive) {
    return (
      <div>
        <div onClick={handleClick}>
          <img
            src={
              "https:" +
              recipe.recipeImg?.file.url +
              "?fit=thumb&f=top_left&h=200&w=200&r=180"
            }
          />
          <h2>{recipe.recipeTitle}</h2>
        </div>
        <p>{recipe.shortDescription}</p>
        <p>{recipe.longDescription}</p>
        <Link className="link" to={`/recipe/${recipe.recipeUrl}`}>
          view more
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <div onClick={handleClick}>
          <img
            src={
              "https:" +
              recipe.recipeImg?.file.url +
              "?fit=thumb&f=top_left&h=200&w=200&r=180"
            }
          />
          <h2>{recipe.recipeTitle}</h2>
        </div>
        <p>{recipe.shortDescription}</p>
      </div>
    );
  }
};

export default RecipeCard;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default ({ filteredRecipes }) => {
  const [thisRecipe, setThisRecipe] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  const myRecipe = filteredRecipes.find((aRecipe) => {
    return aRecipe.recipePicture?.sys.id === id;
  });

  useEffect(() => {
    setThisRecipe(myRecipe);
  }, [id]);

  console.log(filteredRecipes);
  console.log(myRecipe);
  console.log(thisRecipe);

  return (
    <div>
      <button onClick={handleClick}>back</button>
      <img
        src={
          "https:" +
          thisRecipe.recipeImg?.file.url +
          "?fit=thumb&f=top_left&h=200&w=200&r=180"
        }
      />
      <h2>{thisRecipe.recipeTitle}</h2>
      <p>{thisRecipe.shortDescription}</p>
      <p>{thisRecipe.longDescription}</p>
      <h3>Ingredients</h3>
      <ul>
        {thisRecipe.ingredient?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ul>
        {thisRecipe.steps?.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
    </div>
  );
};

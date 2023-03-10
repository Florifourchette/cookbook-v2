import React, { useEffect, useState } from "react";
import useContentful from "./useContentful";
import RecipeCard from "./RecipeCard";
import Filter from "./Filter";

const App = () => {
  const { getRecipes } = useContentful();
  const [recipes, setRecipes] = useState([]);
  const [isBoxChecked, setIsBoxChecked] = useState(false);

  useEffect(() => {
    getRecipes().then((response) => {
      console.log(response);
      setRecipes(response);
    });
  }, [isBoxChecked]);

  const handleClickVegan = (e) => {
    e.preventDefault();
    setRecipes(recipes.filter((item) => item.vegan === true));
  };

  const displayAllresults = (e) => {
    setIsBoxChecked(false);
  };

  return (
    <div>
      <Filter handleClickVegan={handleClickVegan} />
      <button id="resetAll" onClick={displayAllresults}>
        Reset all filters
      </button>
      {recipes?.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;

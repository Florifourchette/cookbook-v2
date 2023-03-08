import React, { useEffect, useState } from "react";
import useContentful from "./useContentful";
import RecipeCard from "./RecipeCard";

const App = () => {
  const { getRecipes } = useContentful();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((response) => {
      console.log(response);
      setRecipes(response);
    });
  }, []);

  return (
    <div>
      {recipes?.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;

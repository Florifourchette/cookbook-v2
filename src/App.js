import React, { useEffect, useState } from "react";
import useContentful from "./useContentful";
import RecipeCard from "./RecipeCard";

const App = () => {
  const { getRecipes } = useContentful();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const myData = await getRecipes();
      return myData;
    }
    async function loadIAgain() {
      const myNewData = await loadItems();
      console.log(myNewData.items);
      setRecipes(myNewData.items);
    }
    loadIAgain();
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

import React, { useEffect, useState } from "react";
import useContentful from "./useContentful";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";




const App = () => {
  const { getRecipes } = useContentful();
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
  

  useEffect(() => {
    getRecipes().then((response) => {
      console.log(response);
      setRecipes(response);
    });
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
  recipe.recipeTitle.toLowerCase().includes(searchInput.toLowerCase())
);

  console.log(filteredRecipes, 'is the filtered recipes');

  useEffect(() => {
    console.log('search value was changed to', searchInput);
  }, [searchInput]);

  return (
    <div>
      <>
        <SearchBar  callback={(searchInput) => setSearchInput(searchInput)}/>
      </>
      {filteredRecipes?.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;

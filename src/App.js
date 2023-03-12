import React, { useEffect, useState } from "react";
import useContentful from "./useContentful";
import RecipeCard from "./RecipeCard";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const App = () => {
  const { getRecipes } = useContentful();
  const [recipes, setRecipes] = useState([]);
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRecipes().then((response) => {
      console.log(response);
      setRecipes(response);
    });
  }, []);

  const displayAllresults = (e) => {
    e.preventDefault();
    getRecipes().then((response) => {
      console.log(response);
      setRecipes(response);
    });
    setIsBoxChecked(false);
    console.log(isBoxChecked);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe.recipeTitle.toLowerCase().includes(searchInput.toLowerCase()) &&
      (isBoxChecked ? recipe.vegan === true : recipe)
    );
  });

  return (
    <div>
      <Filter
        callback={(isBoxChecked) => {
          return setIsBoxChecked(isBoxChecked);
        }}
        displayAllresults={displayAllresults}
      />

      <>
        <SearchBar callback={(searchInput) => setSearchInput(searchInput)} />
      </>
      {filteredRecipes?.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;

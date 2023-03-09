import React, { useEffect, useState } from "react";
import useContentful from "./useContentful";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

const App = () => {
  const { getRecipes } = useContentful();
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((response) => {
      console.log(response);
      setRecipes(response);
    });
  }, []);

  // update state of search function
  const updateSearch = (searchData) => {
    console.log("update function");
    setSearchInput(searchData);
};

// new
const handleFilter = (filteredItems) => {
  const filteredRecipes = recipes.filter((recipe) => filteredItems.includes(recipe.category));
  setFilteredRecipes(filteredRecipes);
};

  return (
    <div>
      <>
        <SearchBar updateSearch={updateSearch} recipes={filteredRecipes.length > 0 ? filteredRecipes : recipes} searchInput={searchInput} onFilter={handleFilter}/>
      </>
      {recipes?.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;

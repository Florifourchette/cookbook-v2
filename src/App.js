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

  // update state of search function
  const updateSearch = (searchData) => {
    console.log("update function");
    setSearchInput(searchData);
};


  return (
    

    <div>
      <>
        <SearchBar updateSearch={updateSearch}  recipes={recipes} searchInput={searchInput}/>
      </>
      {recipes?.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;

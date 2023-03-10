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

  //Filter to sort out the vegan options//
  const handleClickVegan = (e) => {
    e.preventDefault();
    //check if the box is checked and filter the recipe - if recipe is vegan or not//
    if (!isBoxChecked) {
      setRecipes(recipes.filter((item) => item.vegan === true));
    } else {
      //call all the recipes again if box unchecked//
      getRecipes().then((response) => {
        console.log(response);
        setRecipes(response);
      });
    }
    //change the status of the variable "isBoxChecked" to false or true depending on the previous value//
    setIsBoxChecked((prev) => !prev);
  };

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
    return recipe.recipeTitle.toLowerCase().includes(searchInput.toLowerCase())
  }
    
  );



  return (
    <div>
      <Filter
        handleClickVegan={handleClickVegan}
        displayAllresults={displayAllresults}
        isBoxChecked={isBoxChecked}
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

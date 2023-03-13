import React, { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import useContentful from "./useContentful";
import Recipe from "./Recipe";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import Home from "./Home";

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
    <div className="root">
      <nav>
        <NavLink
          className="link"
          to="/"
          style={({ isActive }) => {
            return isActive ? { color: "grey", fontWeight: "bold" } : {};
          }}
        >
          Home
        </NavLink>
      </nav>
      <Filter
        callback={(isBoxChecked) => {
          return setIsBoxChecked(isBoxChecked);
        }}
        displayAllresults={displayAllresults}
      />

      <>
        <SearchBar callback={(searchInput) => setSearchInput(searchInput)} />
      </>
      <Routes>
        <Route path="/" element={<Home filteredRecipes={filteredRecipes} />} />
        <Route
          path="/recipe/:id"
          element={<Recipe filteredRecipes={filteredRecipes} />}
        />
      </Routes>
    </div>
  );
};

export default App;

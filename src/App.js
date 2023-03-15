import React, { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import useContentful from "./useContentful";
import Recipe from "./Recipe";
import Filter from "./Filter";
import Home from "./Home";
import NavigationBar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";
import About from "./About";

const App = () => {
  const { getRecipes } = useContentful();
  const { getCategories } = useContentful();
  const [recipes, setRecipes] = useState([]);
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryID, setCategoryID] = useState(null);

  useEffect(() => {
    getRecipes(categoryID).then((response) => {
      console.log(response);
      setRecipes(response);
    });
  }, [categoryID]);

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
      console.log(response);
    });
  }, []);

  const handleSearchInput = (input) => {
    setSearchInput(input);
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
    return (
      recipe.recipeTitle.toLowerCase().includes(searchInput.toLowerCase()) &&
      (isBoxChecked ? recipe.vegan === true : recipe)
    );
  });

  return (
    <div className="root">
      <NavigationBar callback={handleSearchInput} />
      <Filter
        callback={(isBoxChecked) => {
          return setIsBoxChecked(isBoxChecked);
        }}
        displayAllresults={displayAllresults}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filteredRecipes={filteredRecipes}
              categories={categories}
              categoryID={categoryID}
              setCategoryID={setCategoryID}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/recipe/:id"
          element={<Recipe filteredRecipes={filteredRecipes} />}
        />
      </Routes>
    </div>
  );
};

export default App;

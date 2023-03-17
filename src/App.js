import React, { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import useContentful from "./useContentful";
import manageContentful from "./manageContentful";
import Recipe from "./Recipe";
import Home from "./Home";
import NavigationBar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";

const App = () => {
  const { getRecipes } = useContentful();
  const { getCategories } = useContentful();
  const { createEntry } = manageContentful();
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryID, setCategoryID] = useState(null);
  const [checked, setchecked] = useState(false);
  const titleRef = useRef("");
  const shortTextRef = useRef("");
  const longTextRef = useRef("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      fields: {
        recipeTitle: {
          "en-US": titleRef.current.value,
        },
        shortDescription: {
          "en-US": shortTextRef.current.value,
        },
        longDescription: {
          "en-US": longTextRef.current.value,
        },
      },
    };
    createEntry(entry).then((data) => console.log(data));
  };

  const displayAllresults = (e) => {
    e.preventDefault();
    getRecipes().then((response) => {
      console.log(response);
      setRecipes(response);
      setCategoryID(null);
      setchecked(false);
    });
    // window.location.reload();
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe.recipeTitle.toLowerCase().includes(searchInput.toLowerCase()) &&
      (checked ? recipe.vegan === true : recipe)
    );
  });

  return (
    <div className="root">
      <NavigationBar callback={handleSearchInput} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filteredRecipes={filteredRecipes}
              categories={categories}
              categoryID={categoryID}
              setCategoryID={setCategoryID}
              displayAllresults={displayAllresults}
              recipes={recipes}
              setRecipes={setRecipes}
              setchecked={setchecked}
              checked={checked}
              titleRef={titleRef}
              shortTextRef={shortTextRef}
              longTextRef={longTextRef}
              handleSubmit={handleSubmit}
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
      <Footer />
    </div>
  );
};

export default App;

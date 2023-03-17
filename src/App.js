import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import useContentful from "./useContentful";
import manageContentful from "./manageContentful";
import Recipe from "./Recipe";
import Home from "./Home";
import NavigationBar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import Signup from "./Signup";
import Login from "./Login";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

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
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    getRecipes(categoryID, searchInput).then((response) => {
      console.log(response);
      setRecipes(response);
      console.log("renders?");
    });
  }, [categoryID, searchInput, uploading]);

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  const handleSubmit = async (e) => {
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
    createEntry(entry, setUploading).then((data) => {
      console.log(data);
    });
    titleRef.current.value = "";
    shortTextRef.current.value = "";
    longTextRef.current.value = "";
  };

  const displayAllresults = (e) => {
    e.preventDefault();
    setCategoryID(null);
    setchecked(null);
    setSearchInput("");
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
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
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/About"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <ProtectedRoute>
              <Recipe filteredRecipes={filteredRecipes} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

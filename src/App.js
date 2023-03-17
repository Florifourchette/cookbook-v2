import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import useContentful from "./useContentful";
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
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryID, setCategoryID] = useState(null);
  const [checked, setchecked] = useState(false);

  useEffect(() => {
    getRecipes(categoryID).then((response) => {
      setRecipes(response);
    });
  }, [categoryID]);

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  const displayAllresults = (e) => {
    e.preventDefault();
    getRecipes().then((response) => {
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          exact path="/"
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
            />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" 
        
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          } 
        />
        <Route path="/About" 
        element={
            <ProtectedRoute>
              <About  />
            </ProtectedRoute>
          } />
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

import React, { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import useContentful from "./useContentful";
import Recipe from "./Recipe";
import Home from "./Home";
import NavigationBar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import Signup from "./Signup";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./contexts/AuthContext";





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
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center" id="container">
          <div className="w-100 sign-up">
            <Signup />
          </div>
          
        </Container>
      </AuthProvider>
      
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

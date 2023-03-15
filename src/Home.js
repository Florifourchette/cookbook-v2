import React from "react";
import RecipeCard from "./RecipeCard";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

export default ({ filteredRecipes, categories }) => {
  const filterOptions = createFilterOptions({
    matchFrom: "start",
  });

  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column flex-wrap align-items-center">
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-9 d-flex justify-content-center flex-wrap">
          <img className="topImg" src="./lasagne.webp" />
          <div className="homeBox">
            <h1>Welcome</h1>
            <p>
              We are a trusted resource for home cooks with more than 3,000
              tested recipes, guides, and meal plans, drawing over 15 million
              readers each month from around the world.
            </p>
          </div>
        </div>
      </div>
      <Autocomplete
        id="filter-demo"
        options={categories}
        getOptionLabel={(category) => category?.fields?.name}
        filterOptions={filterOptions}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Recipe Category" />
        )}
      />
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 d-flex justify-content-center flex-wrap">
          {filteredRecipes?.map((recipe) => (
            <RecipeCard key={recipe.recipeUrl} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

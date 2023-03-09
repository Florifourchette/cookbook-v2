import React from "react";
import { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function SearchBar(props) {
    const [searchEntry, setSearchEntry] = useState("");
    


    const filteredItems = props.recipes.filter(recipe => {
        return recipe.recipeTitle.toLowerCase().includes(props.searchInput.toLowerCase());
        });
        console.log(filteredItems);


    const handleSubmit = (e) => {
        e.preventDefault();
        const searchData = searchEntry;
        props.updateSearch(searchData);
        setSearchEntry('');
        
        
        
    };

  return (
    <>
    <div>
        <form  onSubmit={handleSubmit}>
            <input
                name="searchEntry"
                value={searchEntry}
                onChange={(e) => setSearchEntry(e.target.value)}
                type={"text"}
                placeholder={"What are we cooking today?"}
                required
            ></input>
            <button>Search</button>
        </form>
    </div>

    <div>
        {/* {filteredItems?.map((filteredRecipe, index) => (
        <RecipeCard key={index} filteredRecipe={filteredRecipe} />
        ))} */}
    </div>
    </>
  )
}

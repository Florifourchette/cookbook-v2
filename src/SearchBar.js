import React from "react";
import { useState } from "react";

export default function SearchBar({ callback }) {
  const [searchEntry, setSearchEntry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(searchEntry);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="searchEntry"
            value={searchEntry}
            onChange={(e) => setSearchEntry(e.target.value)}
            type={"text"}
            placeholder={"What are we cooking today?"}
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
  );
}

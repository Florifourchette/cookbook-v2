import React from "react";
import { useState } from "react";

const Filter = ({ callback, displayAllresults }) => {
  const [checked, setchecked] = useState(true);

  const handleChange = () => {
    setchecked(!checked);
    callback(checked);
  };

  return (
    <>
      <input type="checkbox" value={checked} onChange={handleChange} />
      Vegan
      <button id="resetAll" onClick={displayAllresults}>
        Reset all filters
      </button>
    </>
  );
};

export default Filter;

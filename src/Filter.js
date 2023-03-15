import React from "react";
import { useRef } from "react";

const Filter = ({ checked, setchecked }) => {
  const handleChange = () => {
    setchecked(!checked);
  };

  return (
    <>
      <div className="checkbox-wrapper-2 d-flex">
        <input
          className="sc-gJwTLC ikxBAC"
          type="checkbox"
          value={checked}
          onChange={handleChange}
        />
        <p>Vegan</p>
      </div>
    </>
  );
};

export default Filter;

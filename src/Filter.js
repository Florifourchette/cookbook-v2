import React from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";

const Filter = ({ handleClickVegan, isBoxChecked, displayAllresults }) => {
  console.log(isBoxChecked);
  return (
    <>
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="Vegan"
        checked={isBoxChecked}
        onChange={handleClickVegan}
      />
      <button id="resetAll" onClick={displayAllresults}>
        Reset all filters
      </button>
    </>
  );
};

export default Filter;

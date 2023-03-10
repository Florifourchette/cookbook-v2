import React from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";

const Filter = ({ handleClickVegan }) => {
  return (
    <>
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="Vegan"
        onChange={handleClickVegan}
      />
    </>
  );
};

export default Filter;

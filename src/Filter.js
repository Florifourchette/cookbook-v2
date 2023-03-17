import React from "react";

const Filter = ({ checked, setchecked }) => {
  console.log(checked);
  const handleChange = () => {
    setchecked(!checked);
  };

  return (
    <>
      <div id="veganSwitch" className="checkbox-wrapper-2 d-flex">
        <input
          className="sc-gJwTLC ikxBAC"
          type="checkbox"
          value={checked}
          onChange={handleChange}
          checked={checked}
        />
        <p id="VeganParagraph">Vegan</p>
      </div>
    </>
  );
};

export default Filter;

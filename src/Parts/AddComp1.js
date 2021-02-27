import React from "react";

// css
import "./AddComp1.css";

const AddComp1 = () => {
  return (
    <div className="addcomp1 mb-5">
      <div className="text-center">
        <br />
        <h1>REDEFINE YOUR RELATIONSHIP WITH FOOD</h1>

        <hr style={{ borderColor: "black" }} className="text-center mt-4" />
      </div>
      <div className="btn-group buttonGroup mt-3">
        <button className="btn">
          <span className="text-success h3">×</span> No Diet Charts
        </button>
        <button className="btn">
          <span className="text-success h3">×</span> No Restrictive Diets
        </button>
        <button className="btn">
          <span className="text-success h3">×</span> No Staying Hungry
        </button>
      </div>
    </div>
  );
};

export default AddComp1;

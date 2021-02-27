import React from "react";

// css
import "./AddComp2.css";

const AddComp2 = ({ imgUrl }) => {
  return (
    // <div class="card">
    //   <img src={imgUrl} alt="Avatar" style={{width:"100%"}} />
    // </div>

    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img
              style={{ display: "flex", flexDirection: "row" }}
              src={imgUrl}
              alt="img-name-here.."
              class="card-img-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComp2;

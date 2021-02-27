import React from "react";

// css
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="row banner">
        <div className="col-md-6 p-5 ">
          <h1 className="text-center text-white">Discover a Healthier You</h1>
          <hr style={{ borderColor: "white" }} className="text-white mt-4"/>
          <p className="text-center text-white mt-3">
            Get a personalized nutrition program based on your lifestyle, habits
            and blood analysis.
          </p>
          <button className="btn btn-md text-uppercase bg-white mt-5 buttonColor">
            get started
          </button>
        </div>
        <div className="col-md-6 p-5">
          <img
            className="img-fluid"
            src="https://static.wixstatic.com/media/9d3b92_99f1a6ad907e4aae84ca1d2bb15edf58~mv2.png/v1/fill/w_455,h_370,al_c,q_85,usm_0.66_1.00_0.01/HP_Image.webp"
            alt="sova-health"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;

import React from "react";
import SliderCom from "./Slider";

export default function WaterFall() {
  return (
    <div className="container waterfall_container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="display-4 font-weight-bold">
            Waterfall Free Structure
          </h1>
        </div>
        <div className=" col-md-12 waterfall__slider">
          <SliderCom />
        </div>
      </div>
    </div>
  );
}

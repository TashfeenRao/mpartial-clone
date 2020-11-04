import React from "react";
import "../../css/VideosComp.css";
import icon from '../../images/play-rounded-button (1).png'

export default function VideosComp() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center videocom__text">
          Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX
        </div>
        <div className="col-md-12 text-center videocom__text">
          (TrueSketch PLUS)
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="videoContianer1">
            <h1 className="videoContianer__text">mPartial - Pre-Mitigation</h1>
            <img className="videoContianer__icon" src={icon} alt="" />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="videoContianer2">
            <h1 className="videoContianer__text">mPartial - Post-Mitigation</h1>
            <img className="videoContianer__icon" src={icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

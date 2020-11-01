import React from "react";
import { Player } from "video-react";
import "../../css/Banner.css";
import backVideo from "../../images/homepage.mp4";

export default function Banner() {
  return (
    <div className="banner__container">
      <div className="banner__videoCon">
        <video autoPlay loop muted className="banner__video">
          <source src={backVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

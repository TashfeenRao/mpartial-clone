import React from "react";
import { Player } from "video-react";
import "../../css/Banner.css";

export default function Banner() {
  return (
    <div className="banner__container">
      <div className="banner__videoCont">
        <div className="banner__video">
          <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
        </div>
      </div>
    </div>
  );
}

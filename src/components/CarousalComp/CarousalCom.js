import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/pap2.jpg";
import img2 from "../../images/pap3.png";
import icon from '../../images/play-rounded-button (1).png'

export default function CarousalCom() {
  return (
    <div className="container carousal__container">
      <div className="row">
        <div className="col-md-12">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img2} alt="Los Angeles" width="1100" height="500" />
              </div>
              <div class="carousel-item">
                <img src={img1} alt="Chicago" width="1100" height="500" />
              </div>
            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
            <img src={icon} alt="" className="carousel-control-next-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

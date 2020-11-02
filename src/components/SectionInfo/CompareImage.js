import React from "react";
import { Button } from "react-bootstrap";
import ImageSlider from "react-image-comparison-slider";
import "../../css/CompareImage.css";
import img1 from "../../images/12.jpg";
import img2 from "../../images/13.jpg";

export default function CompareImage() {
  return (
    <div className="" style={{ width: 700, height: 450 }}>
      <ImageSlider
        image1={img1}
        image2={img2}
        customHandle={<Button>move</Button>}
        sliderWidth={3}
        sliderColor="red"
        handleColor="red"
        handleBackgroundColor="white"
      />
    </div>
  );
}

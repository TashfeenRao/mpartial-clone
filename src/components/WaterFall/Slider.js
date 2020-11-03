import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "../../css/WaterFall.css";

export default function SliderCom() {
const [value,setValue] = useState(0);

  return (
    <div className="waterfall__slider">
      <div class="rangeslider__handle-tooltip">
        <span>
          <div class="slider_tooltip_price">$100K</div>
          <div class="slider_tooltip_text">Estimate Grand Total</div>
        </span>
      </div>
      <label>
        <input
          data-toggle="tooltip"
          data-placement="top"
          id="typeinp"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          step="1"
        />
        {value}
      </label>
      <RangeSlider
        value={value}
        onChange={(changeEvent) => setValue(changeEvent.target.value)}
      />
    </div>
  );
}

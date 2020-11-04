import React, { useState } from "react";
import "../../css/WaterFall.css";

export default function SliderCom() {
const [value,setValue] = useState(0);

  return (
    <div className="waterfall__slider mt-5">
      <div class="rangeslider__handle-tooltip">
        <span>
          <div class="slider_tooltip_price">${value}K</div>
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
          max="1000"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          step="1"
        />
        {value}
      </label>
      <div class="partial_fee_btn">
        <i class="info_popup">i</i>
        <label>{Math.floor((value/1000)*100)}%</label>
        <span>mpartial Fee</span>
      </div>
    </div>
  );
}

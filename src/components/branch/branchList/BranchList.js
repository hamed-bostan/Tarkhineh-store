import React, { useState } from "react";
import "./BranchList.scss";
import { branchesInformation } from "../../../data";
const BranchList = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const slideHandler = (direction) => {
    if (direction === "left") {
      setImageIndex(imageIndex > 0 ? imageIndex - 1 : 3);
    } else {
      setImageIndex(imageIndex < 3 ? imageIndex + 1 : 0);
    }
  };

  return (
    <div>
      <span>شعبه اکباتان</span>
      <div className="carousel_slider">
        {/* Images section */}
        <div
          className="carousel_image_container"
          style={{ transform: `translateX(${imageIndex * 100}vw)` }}
        >
          <img className="carousel_image" src={branchesInformation[0].image} />
          <img className="carousel_image" src={branchesInformation[1].image} />
          <img className="carousel_image" src={branchesInformation[2].image} />
          <img className="carousel_image" src={branchesInformation[3].image} />
        </div>
        {/* Icons section */}
        <div className="carousel_icon_container">
          <img
            src="assets/images/icons/arrow-right_white.png"
            alt=""
            className="carousel_arrow_icon carousel_arrow_icon_right"
            onClick={() => slideHandler("left")}
          />
          <img
            src="assets/images/icons/arrow-left_white.png"
            alt=""
            className="carousel_arrow_icon carousel_arrow_icon_left"
            onClick={() => slideHandler("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default BranchList;

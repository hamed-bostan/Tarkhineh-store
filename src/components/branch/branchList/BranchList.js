import React, { useState } from "react";
import "./BranchList.scss";
import { branchesInformation } from "../../../data";
import BranchListAddress from "./branchListAddress/BranchListAddress";
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
    <div className="branch_list_container">
      <span className="branch_list_carousel_title">شعبه اکباتان</span>
      <div className="branch_list_carousel_slider">
        {/* Images section */}
        <div
          className="branch_list_carousel_image_container"
          style={{ transform: `translateX(${imageIndex * 100}vw)` }}
        >
          <img
            className="branch_list_carousel_image"
            src={branchesInformation[0].image}
          />
          <img
            className="branch_list_carousel_image"
            src={branchesInformation[1].image}
          />
          <img
            className="branch_list_carousel_image"
            src={branchesInformation[2].image}
          />
          <img
            className="branch_list_carousel_image"
            src={branchesInformation[3].image}
          />
        </div>
        {/* Icons section */}
        <div className="branch_list_carousel_icon_container">
          <img
            src="assets/images/icons/arrow-right_white.png"
            alt=""
            className="branch_list_carousel_arrow_icon branch_list_carousel_arrow_icon_right"
            onClick={() => slideHandler("left")}
          />
          <img
            src="assets/images/icons/arrow-left_white.png"
            alt=""
            className="branch_list_carousel_arrow_icon branch_list_carousel_arrow_icon_left"
            onClick={() => slideHandler("right")}
          />
        </div>
      </div>
      {/* Address section */}
      <BranchListAddress />
    </div>
  );
};

export default BranchList;

import React from "react";
import "./BranchComponent.scss";
// Components
import { branchesInformation } from "../../../data";

const BranchComponent = () => {
  return (
    <div className="branch_component_main_container">
      <span className="branch_component_main_title">ترخینه گردی</span>
      <div className="branch_component_wrapper">
        {branchesInformation.map((item) => {
          const { id, image, title, address } = item;
          return (
            <div className="branch_component_container" key={id}>
              {/* image container */}
              <div className="branch_component_image_container">
                <img src={image} alt="" className="branch_component_image" />
                <img
                  src="assets/images/icons/expand_01.png"
                  alt=""
                  className="branch_component_expand_icon"
                />
                <img
                  src="assets/images/icons/gallery.png"
                  alt=""
                  className="branch_component_gallery_icon"
                />
              </div>
              {/* information container */}
              <div className="branch_component_information">
                <span className="branch_component_card_title">{title}</span>
                <p className="branch_component_description">{address}</p>
                <div className="branch_component_button_container">
                  <button className="branch_component_button">صفحه شعبه</button>
                  <img
                    src="assets/images/icons/arrow-left.png"
                    alt=""
                    className="branch_component_arrow_left"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BranchComponent;

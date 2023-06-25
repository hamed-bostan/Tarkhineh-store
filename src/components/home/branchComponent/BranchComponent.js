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
          const { image, title, description } = item;
          return (
            <div className="branch_component_container">
              <div>
                <img src={image} alt="" className="branch_component_image" />
              </div>
              <div className="branch_component_information">
                <span className="branch_component_card_title">{title}</span>
                <p className="branch_component_description">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BranchComponent;

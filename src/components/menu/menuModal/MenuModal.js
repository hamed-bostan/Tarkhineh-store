import React from "react";
import "./MenuModal.scss";
import { useParams } from "react-router-dom";
import { foodInformation } from "../../../data";

const MenuModal = ({ close }) => {
  let { productId } = useParams();

  const singleProduct = foodInformation.find(
    (product) => parseInt(product.id) === parseInt(productId)
  );

  const { image, title, description, star } = singleProduct;

  return (
    <>
      <div className="menu_modal_background" onClick={close}></div>
      <div className="menu_modal_container">
        <div className="menu_modal_header_container">
          <span className="menu_modal_header_title">اطلاعات محصول</span>
          <img
            src="assets/images/icons/Close icon.png"
            alt=""
            className="menu_modal_close_icon"
            onClick={close}
          />
        </div>
        <img src={image} alt="" className="menu_modal_main_image" />
        <div className="menu_modal_information_container">
          <div className="menu_modal_top_container">
            <span className="menu_modal_title">{title}</span>
            <span className="start">{star}</span>
          </div>
          <div className="menu_modal_bottom_container">
            <p className="menu_modal_description">{description}</p>
            <span className="menu_modal_comment">(۷۵ نظر)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;

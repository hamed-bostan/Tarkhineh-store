import React from "react";
import "./CartCompletingInformationOrderingDescription.scss";

const CartCompletingInformationOrderingDescription = () => {
  return (
    <div className="cart_Completing_Information_Ordering_Description_container">
      <div className="cart_Completing_Information_Ordering_Description_wrapper">
        <img
          src="assets/images/icons/document_normal.png"
          alt=""
          className="cart_completing_information_icons"
        />
        <div className="cart_Completing_Information_Ordering_Description_text_container">
          <span className="cart_Completing_Information_Ordering_Description_text">
            توضیحات سفارش
          </span>
          <span className="cart_Completing_Information_Ordering_Description_text_optional">
            (اختیاری)
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCompletingInformationOrderingDescription;

import React from "react";
import "./CartHeader.scss";

const CartHeader = () => {
  return (
    <div className="cart_header_container">
      <img
        src="assets/images/icons/arrow_right.png"
        alt=""
        className="cart_arrow_icon"
      />
      <span className="cart_header_title">سبد خرید</span>
      <img
        src="assets/images/icons/trash.png"
        alt=""
        className="cart_trash_icon"
      />
    </div>
  );
};

export default CartHeader;

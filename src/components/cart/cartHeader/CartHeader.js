import React, { useState } from "react";
import "./CartHeader.scss";
import CartClear from "../cartClear/CartClear";

const CartHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        onClick={() => setIsOpen(true)}
      />
      {isOpen && <CartClear close={() => setIsOpen(false)} />}
    </div>
  );
};

export default CartHeader;

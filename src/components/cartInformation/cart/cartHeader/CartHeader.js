import React, { useState } from "react";
import "./CartHeader.scss";
import { useSelector } from "react-redux";
import CartClear from "../cartClear/CartClear";

const CartHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state) => state.cartState);

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
        className={`${
          state.itemsCounter > 0
            ? "cart_trash_icon"
            : "cart_trash_icon cart_trash_icon_inactive"
        }`}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && state.itemsCounter > 0 && (
        <CartClear close={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default CartHeader;

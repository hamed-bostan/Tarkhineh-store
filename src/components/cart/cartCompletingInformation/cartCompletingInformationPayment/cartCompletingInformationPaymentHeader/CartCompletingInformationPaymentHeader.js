import React, { useState } from "react";
import "./CartCompletingInformationPaymentHeader.scss";
import { useSelector } from "react-redux";
import CartClear from "../../../cartClear/CartClear";

const CartCompletingInformationPaymentHeader = () => {
  const state = useSelector((state) => state.cartState);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cart_completing_information_payment_header_container">
        <span className="cart_completing_information_payment_header_text">
          سبد خرید ({state.itemsCounter})
        </span>
        <img
          src="assets/images/icons/trash.png"
          alt=""
          className="cart_completing_information_payment_header_trash_icon"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {isOpen && <CartClear close={() => setIsOpen(false)} />}
    </>
  );
};

export default CartCompletingInformationPaymentHeader;

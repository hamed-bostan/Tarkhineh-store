import React from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
// Components
import Navbar from "../home/navbar/Navbar";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  return (
    <div>
      <Navbar />
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
    </div>
  );
};

export default Cart;

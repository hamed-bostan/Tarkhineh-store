import React from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
// Components
import Navbar from "../home/navbar/Navbar";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);
  const { title, discountedPrice } = state;

  return (
    <div>
      <Navbar />
      {/* header section */}
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
      {/* End of header section */}
      {/* information section */}
      <div className="cart_information_main_container">
        <div className="cart_wrapper">
          {state.selectedItems.map((item) => {
            return (
              <div className="cart_container">
                {/* information container */}
                <div className="cart_information_container">
                  <span className="cart_information_title">{item.title}</span>
                  <span className="cart_information_discounted_price">
                    {item.discountedPrice}
                  </span>
                </div>
                {/* End of information container */}
                {/* button container */}
                <div className="cart_button_container">
                  <img
                    src="assets/images/icons/increase_icon.png"
                    alt=""
                    className="cart_information_button_icon_increase"
                  />
                  <img
                    src="assets/images/icons/reduce_icon.png"
                    alt=""
                    className="cart_information_button_icon_decrease"
                  />
                  <img
                    src="assets/images/icons/trash_green.png"
                    alt=""
                    className="cart_information_button_icon_trash"
                  />
                </div>
                {/* End of button container */}
              </div>
            );
          })}
        </div>
      </div>
      {/* End of information section */}
    </div>
  );
};

export default Cart;

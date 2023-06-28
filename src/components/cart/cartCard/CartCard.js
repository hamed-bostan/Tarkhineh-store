import React from "react";
import "./CartCard.scss";

const CartCard = ({item}) => {
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
};

export default CartCard;

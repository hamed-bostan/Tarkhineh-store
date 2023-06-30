import React from "react";
import "./CartCard.scss";

const CartCard = ({ item }) => {
  return (
    <div className="cart_container">
      <img src={item.image} alt="" className="cart_image" />

      {/* information container */}
      <div className="cart_information_container">
        <p className="cart_information_title">{item.title}</p>
        <img
          src="assets/images/icons/trash.png"
          alt=""
          className="cart_information_trash_icon"
        />
      </div>
      {/* End of information container */}

      <div className="cart_final_price_container">
        <p className="cart_final_price">{item.finalPrice}</p>
      </div>

      {/* button container */}
      <div className="cart_button_container">
        <img
          src="assets/images/icons/increase_icon.png"
          alt=""
          className="cart_increase_icon"
        />
        <img
          src="assets/images/icons/reduce_icon.png"
          alt=""
          className="cart_decrease_icon"
        />
        <img
          src="assets/images/icons/trash_green.png"
          alt=""
          className="cart_trash_icon"
        />
      </div>
      {/* End of button container */}

      {/* 1100px */}
      {/* ************** */}
      {/* 1100px */}

      {/* description container */}
      <div className="cart_description_container">
        <p className="cart_description">{item.description.slice(0, 20)}</p>
        <div className="cart_highPrice_discount_container">
          <span className="cart_high_price">{item.highPrice}</span>
          {/* <span className="cart_discount">{item?.discount}</span> */}
          <span className={`${item?.discount ? "cart_discount" : ""}`}>
            {item?.discount}
          </span>
        </div>
      </div>
      {/* End of description container */}

      {/* star container */}
      <div className="cart_star_container">
        <span>{item.star}</span>
      </div>
      {/* End of star container */}
    </div>
  );
};

export default CartCard;

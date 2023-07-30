import React from "react";
import "./CartCardDesktop.scss";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../../../redux/cart/cartAction";

const CartCardDesktop = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart_card_desktop_main_container">
      <div className="cart_image_container">
        <img src={item.image} alt="" className="cart_image" />
      </div>
      <div className="cart_card_desktop_container">
        {/* first row */}
        <div className="cart_card_desktop_wrapper">
          <p className="cart_card_desktop_title">{item.title}</p>
          <img
            src="assets/images/icons/trash.png"
            alt=""
            className="cart_card_desktop_trash_icon"
            onClick={() => dispatch(removeItem(item))}
          />
        </div>
        {/* End of first row */}
        {/* second row */}
        <div className="cart_card_desktop_wrapper">
          <p className="cart_card_desktop_description">
            {item.description.slice(0, 25)} ...
          </p>
          <div className="cart_card_desktop_highPrice_discount_container">
            <span className="cart_card_desktop_high_price">
              {item.highPrice}
            </span>
            <span className={`${item?.discount ? "cart_discount" : ""}`}>
              {item?.discount}
            </span>
          </div>
        </div>
        {/* End of second row */}
        {/* third row */}
        <div className="cart_card_desktop_wrapper">
          {/* <span>{item.star}</span> */}
          {/* button section */}
          <div className="cart_card_button_container">
            <img
              src="assets/images/icons/increase_icon.png"
              alt=""
              className="cart_increase_icon"
              onClick={() => dispatch(increase(item))}
            />
            <span className="cart_card_quantity">{item.quantity}</span>
            {item.quantity > 1 ? (
              <img
                src="assets/images/icons/reduce_icon.png"
                alt=""
                className="cart_decrease_icon"
                onClick={() => dispatch(decrease(item))}
              />
            ) : (
              <img
                src="assets/images/icons/trash_green.png"
                alt=""
                className="cart_trash_icon"
                onClick={() => dispatch(removeItem(item))}
              />
            )}
          </div>
          {/* End of button section */}
          <p className="cart_card_desktop_final_price">
            {item.finalPrice} تومان
          </p>
        </div>
        {/* End of third row */}
      </div>
    </div>
  );
};

export default CartCardDesktop;

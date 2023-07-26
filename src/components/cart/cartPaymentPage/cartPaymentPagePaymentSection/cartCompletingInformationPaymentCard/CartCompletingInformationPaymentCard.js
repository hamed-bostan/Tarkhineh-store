import React from "react";
import "./CartCompletingInformationPaymentCard.scss";
import { useDispatch } from "react-redux";
import {
  increase,
  decrease,
  removeItem,
} from "../../../../redux/cart/cartAction";

const CartCompletingInformationPaymentCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart_completing_information_payment_card">
      {/* top section */}
      <div className="cart_card_mobile_top_container">
        <span className="cart_card_mobile_title">{item.title}</span>
        <span className="cart_card_mobile_final_price">
          {item.finalPrice} تومان
        </span>
      </div>
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
    </div>
  );
};

export default CartCompletingInformationPaymentCard;

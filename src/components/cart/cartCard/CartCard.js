import React from "react";
import "./CartCard.scss";
// Components
import { increase, removeItem, decrease } from "../../redux/cart/cartAction";
import { useDispatch } from "react-redux";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

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
          onClick={() => dispatch(removeItem(item))}
        />
      </div>
      {/* End of information container */}

      <div className="cart_final_price_container">
        <p className="cart_final_price">{item.finalPrice} تومان</p>
      </div>

      {/* button container */}
      <div className="cart_button_container">
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
      {/* End of button container */}

      {/* description container */}
      <div className="cart_description_container">
        <p className="cart_description">{item.description.slice(0, 25)} ...</p>
        <div className="cart_highPrice_discount_container">
          <span className="cart_high_price">{item.highPrice}</span>
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

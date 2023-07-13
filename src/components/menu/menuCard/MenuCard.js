import React from "react";
import "./MenuCard.scss";
// Redux
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";
import { Link } from "react-router-dom";

const MenuCard = ({ data, open }) => {
  const dispatch = useDispatch();

  const {
    id,
    image,
    title,
    description,
    highPrice,
    discount,
    finalPrice,
    star,
  } = data;

  return (
    <article className="menu_card_container">
      <Link to={`/${id}`}>
        <img src={image} alt="" className="menu_image" onClick={open} />
      </Link>

      <div className="menu_card_information_container">
        {/* first div */}
        <div className="menu_card_single_item_container">
          <span className="menu_card_single_item_title">{title}</span>
          <div className="menu_high_price_container">
            <span className="menu_high_price">{highPrice}</span>
            <span className={`${data?.discount ? "menu_discount_item" : ""}`}>
              {discount}
            </span>
          </div>
        </div>
        {/* next div */}
        <div className="menu_card_single_item_container">
          <p>{description.slice(0, 20)} ...</p>
          <span>{finalPrice} تومان</span>
        </div>
        {/* next div */}
        <div className="menu_card_single_item_container">
          <img
            src="assets/images/icons/heart.png"
            alt=""
            className="menu_heart_icon"
          />
          <span>{star}</span>
          <button
            className="menu_add_to_cart_button"
            onClick={() => dispatch(addItem(data))}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuCard;

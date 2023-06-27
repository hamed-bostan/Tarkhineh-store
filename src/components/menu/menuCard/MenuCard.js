import React from "react";
import "./MenuCard.scss";
// Redux
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";

const MenuCard = ({ data }) => {
  const dispatch = useDispatch();

  const {
    image,
    title,
    description,
    highPrice,
    discount,
    discountedPrice,
    star,
  } = data;

  return (
    <section className="menu_items_main_container">
      <article className="menu_items_container">
        <img src={image} alt="" className="menu_image" />
        <div className="menu_items_information_container">
          {/* first div */}
          <div className="menu_single_item_container">
            <span className="menu_single_item_title">{title}</span>
            <div className="menu_high_price_container">
              <span className="menu_high_price">{highPrice}</span>
              <span className="menu_discount_item">{discount}</span>
            </div>
          </div>
          {/* next div */}
          <div className="menu_single_item_container">
            <p>{description.slice(0, 20)} ...</p>
            <span>{discountedPrice}</span>
          </div>
          {/* next div */}
          <div className="menu_single_item_container">
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
    </section>
  );
};

export default MenuCard;

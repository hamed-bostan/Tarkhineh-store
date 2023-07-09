import React from "react";
import "./MenuCard.scss";
// Redux
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";

const MenuCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      {data.map((item) => {
        return (
          <article className="menu_card_container" key={item.id}>
            <img src={item.image} alt="" className="menu_image" />
            <div className="menu_card_information_container">
              {/* first div */}
              <div className="menu_card_single_item_container">
                <span className="menu_card_single_item_title">
                  {item.title}
                </span>
                <div className="menu_high_price_container">
                  <span className="menu_high_price">{item.highPrice}</span>
                  <span
                    className={`${item?.discount ? "menu_discount_item" : ""}`}
                  >
                    {item.discount}
                  </span>
                </div>
              </div>
              {/* next div */}
              <div className="menu_card_single_item_container">
                <p>{item.description.slice(0, 20)} ...</p>
                <span>{item.finalPrice} تومان</span>
              </div>
              {/* next div */}
              <div className="menu_card_single_item_container">
                <img
                  src="assets/images/icons/heart.png"
                  alt=""
                  className="menu_heart_icon"
                />
                <span>{item.star}</span>
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
      })}
    </>
  );
};

export default MenuCard;

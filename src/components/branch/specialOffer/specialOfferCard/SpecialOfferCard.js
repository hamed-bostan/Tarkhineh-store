import React from "react";
import "./SpecialOfferCard.scss";

const SpecialOfferCard = ({ item }) => {
  return (
    <div className="branch_card_main_wrapper">
      <img src={item.image} alt="" className="branch_card_image" />
      <div className="branch_card_wrapper">
        <span className="branch_card_title">{item.title}</span>
        <div className="branch_card_information_container">
          <img
            src="assets/images/icons/heart.png"
            alt=""
            className="branch_card_icon"
          />
          <div className="branch_card_high_price_discount_container">
            <span className="branch_card_high_price">{item.highPrice}</span>
            <span className={`${item?.discount ? "branch_card_discount" : ""}`}>
              {item.discount}
            </span>
          </div>
        </div>
        <div className="branch_card_information_container">
          <div className="branch_card_starRate_container">
            <img
              src="assets/images/icons/star_rate.png"
              alt=""
              className="branch_card_icon"
            />
            <span>۵</span>
          </div>
          <span>{item.finalPrice} تومان</span>
        </div>
        <button className="branch_card_add_button">افزودن به سبد خرید</button>
      </div>
    </div>
  );
};

export default SpecialOfferCard;

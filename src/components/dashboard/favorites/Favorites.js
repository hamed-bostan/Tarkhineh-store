import React from "react";
import "./Favorites.scss";

const Favorites = () => {
  return (
    <div className="favorites_container">
      <div className="favorites_image_container">
        <img
          src="assets/images/foodImages/not_iranian_food/not_iranian_food_02.png"
          alt=""
          className="favorites_main_image"
        />
      </div>
      <div className="favorites_information_container">
        {/* first row */}
        <div className="favorites_wrapper">
          <span className="favorites_text">پاستا سبزیجات </span>
          <img
            src="assets/images/icons/heart_filled.png"
            alt=""
            className="favorites_heart_icon"
          />
        </div>
        {/* End of first row */}
        {/* second row */}
        <div className="favorites_wrapper">
          <div className="favorites_star_container">
            <img
              src="assets/images/icons/star_rate.png"
              alt=""
              className="favorites_star_icon"
            />
            <span className="favorites_text">۴</span>
          </div>
          <span className="favorites_text">۱۵۰٬۰۰۰ تومان</span>
        </div>
        {/* End of second row */}
        <div className="favorites_button_container">
          <button className="favorites_button">افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

import React from "react";
import "./Favorites.scss";
import FavoritesInformation from "./favoritesInformation/FavoritesInformation";
import FavoritesTitle from "./favoritesTitle/FavoritesTitle";
import FavoritesButton from "./favoritesButton/FavoritesButton";
import Search from "./search/Search";

const Favorites = () => {
  return (
    <div className="order_tracking_main_container">
      <FavoritesTitle />
      <hr className="order_tracking_horizontal_line" />
      <div className="favorites_button_search_container">
        <FavoritesButton />
        <Search />
      </div>
      <FavoritesInformation />
    </div>
  );
};

export default Favorites;

import React from "react";
import "./Favorites.scss";
import { favouriteInformation } from "../../../data";
import FavoritesCard from "./favoritesCard/FavoritesCard";

const Favorites = () => {
  return (
    <div className="favorites_main_container">
      {favouriteInformation.map((item) => {
        return <FavoritesCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Favorites;

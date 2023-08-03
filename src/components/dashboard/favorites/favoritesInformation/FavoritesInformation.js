import React from "react";
import "./FavoritesInformation.scss";
import FavoritesCard from "./favoritesCard/FavoritesCard";
import { favouriteInformation } from "../../../../data";

const FavoritesInformation = () => {
  return (
    <div className="favorites_main_container">
      {favouriteInformation.map((item) => {
        return <FavoritesCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default FavoritesInformation;

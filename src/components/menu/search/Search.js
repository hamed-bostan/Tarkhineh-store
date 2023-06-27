import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search_container">
      <div className="search_wrapper">
        <input type="text" placeholder="جستجو" className="search_input" />
        <img
          src="assets/images/icons/search-normal-02.png"
          alt=""
          className="search_icon"
        />
      </div>
    </div>
  );
};

export default Search;

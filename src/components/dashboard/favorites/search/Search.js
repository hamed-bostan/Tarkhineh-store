import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <>
      <div className="favorites_search_wrapper">
        <input
          type="text"
          placeholder="جستجو"
          className="favorites_search_input"
        />
        <img
          src="assets/images/icons/search-normal-02.png"
          alt=""
          className="search_icon"
        />
      </div>
    </>
  );
};

export default Search;

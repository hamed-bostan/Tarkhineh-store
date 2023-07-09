import React from "react";
import "./Search.scss";

const Search = ({ setQuery }) => {
  return (
    <div className="search_container">
      <div className="search_wrapper">
        <input
          type="text"
          placeholder="جستجو"
          className="search_input"
          onChange={(e) => setQuery(e.target.value)}
        />
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

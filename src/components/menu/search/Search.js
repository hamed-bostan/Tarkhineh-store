import React from "react";
import "./Search.scss";

const Search = ({ setQuery, search }) => {
  const twoFunction = (e) => {
    setQuery(e.target.value);
    search();
  };
  return (
    <div className="search_container">
      <div className="search_wrapper">
        <input
          type="text"
          placeholder="جستجو"
          className="search_input"
          onChange={(e) => twoFunction(e)}
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

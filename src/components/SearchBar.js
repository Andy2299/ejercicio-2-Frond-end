import React from "react";
import "./css/base.css";
const SearchBar = () => {
  return (
    <div className="div-search">
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
      </div>
    </div>
  );
};

export default SearchBar;

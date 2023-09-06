import React from 'react';
import './css/base.css';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="div-search">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;

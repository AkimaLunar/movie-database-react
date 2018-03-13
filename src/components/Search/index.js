import * as React from 'react';
import FaSearch from 'react-icons/lib/fa/search'
import './style.css';

const Search = () => (
  <div className="search">
    <FaSearch className="search__icon" />
    <input className="search__input" type="text" />
  </div>
);

export default Search;

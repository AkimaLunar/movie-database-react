import * as React from 'react';
import FaSearch from 'react-icons/lib/fa/search'
import './style.css';

const Search = ({ onChange, state }) => (
  <div className="search">
    <FaSearch className="search__icon" />
    <input
      className="search__input"
      type="text"
      value={state.search}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default Search;

import * as React from 'react';
import './style.css';
import Filter from '../Filter';
import { normalizeKey } from '../../helpers/normalizeKey';
import FaClose from 'react-icons/lib/fa/close'


const FilterNotSet = ({ genres, setFilter }) => (
  genres.map(genre => (
    <li
      key={normalizeKey(genre)}
      onClick={() => setFilter(genre)}
    >
      <Filter genre={genre} />
    </li>
  ))
);

const FilterSet = ({ filter, clearFilter }) => (
  <div>
    <h2 className="filter-list__set-filter"><span>&#35;&thinsp;</span>{filter}</h2>
    <button onClick={() => clearFilter()} className="filter-list__clear">
      <FaClose className="filter-list__clear__icon" />&ensp;Clear
    </button>
  </div>
);

const FilterList = ({ movies, filter, setFilter, clearFilter }) => (
  <ul className="filter-list">
    {!movies || movies.isLoading
      ? ('')
      : movies.hasErrored
        ? ('')
        : filter.length > 0
          ? (<FilterSet filter={filter} clearFilter={clearFilter} />)
          : (<FilterNotSet genres={movies.genres} setFilter={setFilter} />)
    }
  </ul>
);

export default FilterList;

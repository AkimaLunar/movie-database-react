import * as React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Filter from '../Filter';
import { normalizeKey } from '../../helpers/normalizeKey';
import FaClose from 'react-icons/lib/fa/close'

const SearchActive = ({ search, clearSearch }) => (
  <div>
    <h2 className="filter-list__search-active">{search}<span>&hellip;</span></h2>
    <button onClick={() => clearSearch()} className="filter-list__clear">
      <FaClose className="filter-list__clear__icon" />&ensp;Clear
    </button>
  </div>
);

SearchActive.propTypes = {
  search: PropTypes.string,
  clearSearch: PropTypes.func
}

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

FilterNotSet.propTypes = {
  genres: PropTypes.array,
  setFilter: PropTypes.func
}

const FilterSet = ({ filter, clearFilter }) => (
  <div>
    <h2 className="filter-list__set-filter"><span>&#35;&thinsp;</span>{filter}</h2>
    <button onClick={() => clearFilter()} className="filter-list__clear">
      <FaClose className="filter-list__clear__icon" />&ensp;Clear
    </button>
  </div>
);

FilterSet.propTypes = {
  filter: PropTypes.string,
  clearFilter: PropTypes.func
}

const FilterList = ({
  movies,
  search,
  clearSearch,
  filter,
  setFilter,
  clearFilter
}) => (
    <ul className="filter-list">
      {!movies || movies.isLoading
        ? ('')
        : movies.hasErrored
          ? ('')
          : search.length > 3
            ? (<SearchActive search={search} clearSearch={clearSearch} />)
            : filter.length > 0
              ? (<FilterSet filter={filter} clearFilter={clearFilter} />)
              : (<FilterNotSet genres={movies.genres} setFilter={setFilter} />)
      }
    </ul>
  );

FilterList.propTypes = {
  movies: PropTypes.array,
  search: PropTypes.string,
  clearSearch: PropTypes.func,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  clearFilter: PropTypes.func
}

export default FilterList;

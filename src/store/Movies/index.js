import { createSelector } from 'reselect';

import {
  IS_LOADING_MOVIES,
  HAS_ERRORED_MOVIES,
  FETCH_SUCCESS_MOVIES,
  FETCH_GENRES
} from './constants';

export const initState = {
  isLoading: false,
  hasErrored: false,
  movies: [],
  genres: []
};

export const movies = (state, action) => {
  if (typeof state === 'undefined') { return initState }
  switch (action.type) {
    case IS_LOADING_MOVIES:
      return { ...state, isLoading: action.isLoading }
    case HAS_ERRORED_MOVIES:
      return { ...state, hasErrored: action.hasErrored }
    case FETCH_SUCCESS_MOVIES:
      return { ...state, movies: action.movies }
    case FETCH_GENRES:
      return { ...state, genres: action.genres }
    default:
      return state;
  }
}

export const getFilteredMovies = (state, filter) => {
  if (filter && filter.filter.length > 0) {
    return {
      ...state,
      movies: state.movies.filter(m => {
        return m.genre &&
          m.genre.toLowerCase().trim() === filter.filter
      })
    }
  }
  return state;
}

export const getSearchedMovies = (state, search) => {
  if (search && search.search.length > 3) {
    return {
      ...state,
      movies: state.movies.filter(m => m.title.toLowerCase().includes(search.search))
    }
  }
  return state;
}


export const getMovies = (state, search, filter) => {
  if (search && search.search.length > 3) {
    return getSearchedMovies(state, search);
  }

  if (filter && filter.filter.length > 0) {
    return getFilteredMovies(state, filter);
  }

  return state;
}
// export const getMovies = createSelector(
//   [getSearchedMovies, getFilteredMovies],
//   (searched, filtered) => {
//     searched.length < filtered.length
//       ? searched
//       : filtered
//   }
// );

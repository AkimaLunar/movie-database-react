import {
  IS_LOADING_MOVIES,
  HAS_ERRORED_MOVIES,
  FETCH_SUCCESS_MOVIES
} from './constants';

export const initState = {
  isLoading: false,
  hasErrored: false,
  movies: []
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
    default:
      return state;
  }
}

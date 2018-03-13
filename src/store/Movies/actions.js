import { API_URL } from '../../config';

import {
  IS_LOADING_MOVIES,
  HAS_ERRORED_MOVIES,
  FETCH_SUCCESS_MOVIES
} from './constants';

export const isLoadingMovies = (bool) => ({
  type: IS_LOADING_MOVIES,
  isLoading: bool
});

export const hasErroredMovies = (bool) => ({
  type: HAS_ERRORED_MOVIES,
  hasErrored: bool
});

export const fetchSuccessMovies = (movies) => ({
  type: FETCH_SUCCESS_MOVIES,
  movies
});

export const fetchMovies = () => (dispatch) => {
  dispatch(isLoadingMovies(true));
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoadingMovies(false));
      return response;
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(fetchSuccessMovies(data))
    })
    .catch(() => dispatch(hasErroredMovies(true)))
}

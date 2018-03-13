import { API_URL } from '../../config';
import { normalizeGenres } from '../../helpers/normalizeGenres';

import {
  IS_LOADING_MOVIES,
  HAS_ERRORED_MOVIES,
  FETCH_SUCCESS_MOVIES,
  FETCH_GENRES
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

export const fetchGenres = (genres) => ({
  type: FETCH_GENRES,
  genres
})

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
      dispatch(fetchSuccessMovies(data))
      return normalizeGenres(data)
    })
    .then(genres => {
      dispatch(fetchGenres(genres))
    })
    .catch(() => dispatch(hasErroredMovies(true)))
}

import { UPDATE_SEARCH, CLEAR_SEARCH } from './constants';

export const updateSearch = (text) => ({
  type: UPDATE_SEARCH,
  text
})

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
})

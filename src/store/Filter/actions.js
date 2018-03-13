import { SET_FILTER, CLEAR_FILTER } from './constants';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter
})

export const clearFilter = () => ({
  type: CLEAR_FILTER,
})

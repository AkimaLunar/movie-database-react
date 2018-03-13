import { UPDATE_SEARCH, CLEAR_SEARCH } from './constants';

export const initState = { search: '' }

export const search = (state, action) => {
  if (typeof state === 'undefined') { return initState };
  switch (action.type) {
    case UPDATE_SEARCH:
      return { ...state, search: action.text };
    case CLEAR_SEARCH:
      return { ...state, search: '' };
    default:
      return state;
  }
}

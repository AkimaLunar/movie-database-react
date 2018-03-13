import { SET_FILTER, CLEAR_FILTER } from './constants';

export const initState = { filter: '' }

export const filter = (state, action) => {
  if (typeof state === 'undefined') { return initState };
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.filter };
    case CLEAR_FILTER:
      return { ...state, filter: '' };
    default:
      return state;
  }
}

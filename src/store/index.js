import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { reduxInspector } from '../helpers/reduxInspector';
import { movies, initState as movieState } from './Movies';
import { search, initState as searchState } from './Search';
import { filter, initState as filterState } from './Filter';

const initState = {
  movies: movieState,
  search: searchState,
  filter: filterState
}
const rootReducer = combineReducers({
  search,
  movies,
  filter
})

const middleware = applyMiddleware(thunk);
const devTools = reduxInspector();

export const store = createStore(
  rootReducer,
  initState,
  compose(middleware, devTools)
)

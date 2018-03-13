import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { reduxInspector } from '../helpers/reduxInspector';
import { search, initState as searchState } from './Search';
import { movies, initState as movieState } from './Movies';

const initState = {
  search: searchState,
  movies: movieState
}
console.log(initState);
const rootReducer = combineReducers({
  search,
  movies
})

const middleware = applyMiddleware(thunk);
const devTools = reduxInspector();

export const store = createStore(
  rootReducer,
  initState,
  compose(middleware, devTools)
)

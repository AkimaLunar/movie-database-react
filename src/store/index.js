import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { reduxInspector } from '../helpers/reduxInspector';

const initState = {
  movies: []
}

const rootReducer = combineReducers({

})

const middleware = applyMiddleware(thunk);
const devTools = reduxInspector();

export const store = createStore(
  rootReducer,
  initState,
  compose(middleware, devTools)
)

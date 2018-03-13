import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store'
import Shell from './containers/Shell';
import registerServiceWorker from './registerServiceWorker';

import './styles/normalize.css'
import './styles/style.css'

ReactDOM.render(
  <Provider store={store} >
    <Shell />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

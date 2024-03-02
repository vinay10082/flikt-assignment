import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'

import App from './App';
import Reducers from './Reducers'

const store = createStore( Reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
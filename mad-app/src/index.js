import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import { rootReducer } from './Store/reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

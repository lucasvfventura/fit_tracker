import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './state/reducers'
import {Dashboard} from './dashboard';

const store = createStore(rootReducer, applyMiddleware(thunk))

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <Dashboard />
    </Provider>, 
    document.getElementById("root"));
});

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {reducers} from "./reducers.js";
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import {Operation} from './reducer';

const api = axios.create({
  baseURL: `https://reqres.in/api`,
  timeout: 1000 * 5,
  withCredentials: false,
});

const store = createStore(
  reducers, compose(
      applyMiddleware(thunkMiddleware.withExtraArgument(api)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

store.dispatch(Operation.loadFlights());

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

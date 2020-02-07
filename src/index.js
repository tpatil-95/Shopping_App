import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { unregister } from "./serviceWorker";
import { configureStore } from "./store";
import "../src/styles/global/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.min.css";

// Unregister the service worker from create-react-app
unregister();

// Always called on resolve of handler.
const defaultRender = () => {
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};

defaultRender();




/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import nameReducer from './reducers/nameReducer';
import wishReducer from './reducers/wishReducer';

const masterReducer=combineReducers({
    name:nameReducer,
    wish:wishReducer

})

//const store=createStore(masterReducer,applyMiddleware(thunk));
const store = createStore(masterReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/

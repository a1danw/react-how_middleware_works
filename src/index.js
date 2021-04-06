import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./reducer";
import { Provider } from "react-redux";
import logger from "redux-logger";

// shorthand notation for middleware
const myLogger = (store) => (next) => (action) => {
  // console.log("middleware ran");
  return next(action);
};

const secondMiddleware = (store) => (next) => (action) => {
  // console.log("second middleware ran");
  return next(action);
};

const capAtTen = (store) => (next) => (action) => {
  console.log(store);
  if (store.getState() >= 10) {
    return next({ type: "DECREMENT" });
  }
  next(action);
};
// function returning a function - middleware
// middleware - function in a function returning a function
// 3 functions

//midleware takes place before the reducer
// catches the action before it hits the reducer
// middleware receives the action object
// it will run whatever code then pass the action object and send it towards the reducer

// passes in store - we have access to state to perform calculations

// const myLogger = (store) => {
//   return (next) => {
//     // receives an action object
//     return (action) => {
//       console.log("middleware ran");
//       // take same action object and send it to the next middleware or to the reducer if last middleware in the stack
//       return next(action);
//     };
//   };
// };

const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, secondMiddleware, capAtTen, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

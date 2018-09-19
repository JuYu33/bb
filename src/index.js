import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {
  createStore, combineReducers,
  applyMiddleware
} from "redux";
import {Provider} from 'react-redux';
// import './App.css';

const initialState = {
  result: 1,
  history: []
}

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": 
      state = {
        ...state, //initialized then overridden
        result: state.result + action.payload,
        history: [...state.history].push(this.result)
      };
      break;
    case "SUBTRACT":
    state = {
      ...state, //initialized then overridden
      result: state.result - action.payload
    };
      break;
    
  }

  //must return state. the new state to be used
  return state;
}

const anotherReducer = (state = {
  name: "Bob's Uncle",
  age: 123
  }, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
};


const myMiddleware = (store) => (next) => (action) => {
  console.log("Logged Action: ", action);
  next(action);
}

const myStore =  createStore(
  combineReducers({reducer1: anotherReducer, math: myReducer}), 
  {}, 
  applyMiddleware(myMiddleware)
);


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

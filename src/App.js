import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";


const initialState = {
    count: 20
};

function reducer(state = initialState, action){
    switch(action.type) {
        case "INCREMENT":
            return{count: state.count + 1};

        case "DECREMENT":
            return{count: state.count - 1};
        
        default: return state;
    }
}


const store = createStore(reducer);

store.dispatch({
    type: "INCREMENET",
    value: 1
})

store.dispatch({
    type: "DECREMENT",
    value: 1
})

class App extends Component {
  render() {
    return (
     <Provider store = {store}>
        <Counter />
     </Provider>
    );
  }
}

export default App;

import React from "react";
import "./Counter.css";

class Counter extends React.Component{
    state = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }


    render(){
        return(
            <div>
                <h1>Redux Counter App</h1>
                <div className="counter-container">   
                    <button onClick = {this.decrement}>SUBTRACT</button>
                    <h2>{this.state.count}</h2>
                    <button onClick = {this.increment}>ADD</button>
                </div>
            </div>
        )
    }
}

export default Counter;
import React from "react";
import "./Counter.css";
import { connect } from "react-redux";

class Counter extends React.Component{

    increment = () => {
       this.props.dispatch({type: "INCREMENT"});
    }

    decrement = () => {
        this.props.dispatch({type: "DECREMENT"});
    }

    render(){
        return(
            <div className="counter-container">
                <button onClick={this.decrement}>SUBTRACT</button>
                <h1>{this.props.count}</h1>
                <button onClick={this.increment}>ADD</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);
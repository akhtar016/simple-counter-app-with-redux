import React from 'react';
import './CounterOutput.css';


const CounterOutput = (props) => {
    return (
    <div className="counterOutput">Current Counter Value: {props.value}</div>
    )
}

export default CounterOutput;
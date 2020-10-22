import React from "react";
import { connect } from "react-redux";
import CounterControl from "../components/CounterControl/CounterControl";
import CounterOutput from "../components/CounterOutput/CounterOutput";

const Counter = (props) => {
  return (
    <div>
      <CounterOutput value={props.counterValue} />
      <CounterControl label="Increment" clicked={props.onIncrementCounter}/>
      <CounterControl label="Decrement" clicked={props.onDecrementCounter}/>
      <CounterControl label="Add 5" clicked={props.onAddFive}/>
      <CounterControl label="Subtract 5" clicked={props.onSubtractFive}/>
    </div>
  );
};


const mapStateToProps = (state) => {
   return {
       counterValue : state.counter
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter : () => dispatch({type: "INCREMENT"}),
        onDecrementCounter : () => dispatch({type:"DECREMENT"}),
        onAddFive: () => dispatch({type:"ADD_FIVE"}),
        onSubtractFive: () => dispatch({type:"SUBTRACT_FIVE"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

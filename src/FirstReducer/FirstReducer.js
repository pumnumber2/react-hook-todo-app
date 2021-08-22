import React, { useReducer } from 'react';

const FirstReducer = () => {
  const countReducer = ({ count, ...state }, { type, ...action }) => {
    switch (type) {
      case "INCREMENT":
        return { count: count + (action.amount || 1) };
      case "DECREMENT":
        return { count: count - (action.amount || 1) };
      case "RESET":
        return { count: 0 };
      default:
        return { count };
    }
  };
  const [state, dispatch] = useReducer(countReducer, { count: 10 });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add 1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', amount: 5 })}>Add 5</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Subtract 1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
    </div>
  );
};

export default FirstReducer;
import { useState, useReducer } from 'react';
import styled from 'styled-components';
const App = () => {
  // The reducer function that will be used to set the state using useReducer
  // The first argument is the current state (where our state is currently at)
  // The second argument is the action that will be passed into the dispatch function. Whatever we call the dispatch with will be sent to the action parameter and the reducer is going to return the updated state based on the action received from the dispatch.
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        // return { count: state.count + 1 };
        // Return the whole state object AND modify the property you want to modify
        return { ...state, count: state.count + 1 };

      case 'DECREMENT':
        // Return the whole state object AND modify the property you want to modify
        return { ...state, count: state.count - 1 };
      default:
        // Useful if an invalid dispatch type is given. Just return the state unchanged
        return state;
    }
  };

  // initial state object for the useReducer
  // Since we're using the useReducer for the counter it makes sense to
  // set the initial state of the counter since that's the only state we're
  // dealing with.
  const initialState = { count: 0 };

  // useReducer takes in the reducer function and the initial state object
  // and returns an array with 1. the state value (which for now will be the initial state we set at the second argument to the useReducer so state will be {count: 0}), and 2. the dispatch function which is what will be used to call the reducer function to update the state.
  const [state, dispatch] = useReducer(reducer, initialState);

  const decrementCount = () => {
    // This calls the dispatch (which in turn calls the reducer function)
    dispatch({ type: 'DECREMENT' });
  };

  const incrementCount = () => {
    // This calls the dispatch (which in turn calls the reducer function)
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <Wrapper>
      <button onClick={decrementCount}>-</button>
      <p>{state.count}</p>
      <button onClick={incrementCount}>+</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding-left: 5%;
`;

export default App;

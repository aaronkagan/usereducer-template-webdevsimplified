import { useReducer } from 'react';
import styled from 'styled-components';

const Todos = () => {
  const ACTIONS = {
    ADD: 'addTodo',
    DELETE: 'deleteTodo'
  };

  const reducer = (state, action) => {};

  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  return <></>;
};

export default Todos;

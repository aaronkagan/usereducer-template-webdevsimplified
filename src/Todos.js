import { useReducer, useState } from 'react';
import styled from 'styled-components';

const Todos = () => {
  const ACTIONS = {
    ADD_TODO: 'addTodo',
    DELETE: 'deleteTodo'
  };

  const reducer = (state, action) => {};

  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO });
    setName('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button>Add Todo</button>
    </Form>
  );
};

const Form = styled.form``;

export default Todos;

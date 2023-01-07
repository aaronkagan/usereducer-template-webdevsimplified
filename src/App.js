import styled from 'styled-components';
import Counter from './Counter';
import Todos from './Todos';
const App = () => {
  return (
    <Wrapper>
      <h3>First Example: Simple counter with one state</h3>
      <Counter />
      <h3>Second Example: Todo list with more complex state</h3>
      <Todos />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;

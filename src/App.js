import styled from 'styled-components';
import Counter from './Counter';
const App = () => {
  return (
    <Wrapper>
      <h3>First Example: Simple counter with one state</h3>
      <Counter />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;

import { useState } from 'react';
import styled from 'styled-components';
const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <Wrapper>
      <button onClick={decrementCount}>-</button>
      <p>{count}</p>
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

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  const decrease = () => setCount(count - 1);

  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter App</h2>

      <h3>{count}</h3>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

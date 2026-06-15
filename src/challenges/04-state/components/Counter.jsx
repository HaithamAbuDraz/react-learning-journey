import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 5);

  const decrease = () => setCount(count - 5);

  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter App</h2>

      <h3>{count}</h3>

      <button onClick={increase}>+5</button>
      <button onClick={decrease}>-5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

import { useState, useCallback } from 'react';
import MemoizedButton from './MemoizedButton';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <MemoizedButton title='Click Me' onClick={handleClick} />
    </div>
  );
}

export default Counter;

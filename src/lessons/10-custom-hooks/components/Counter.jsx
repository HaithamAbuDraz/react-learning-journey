import useCounter from '../hooks/useCounter';

function Counter() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

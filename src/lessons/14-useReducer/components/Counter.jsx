import { useReducer } from 'react';
import { counterReducer } from '../reducer/counterReducer';

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>

      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>

      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

      <button
        onClick={() =>
          dispatch({
            type: 'INCREMENT_BY',
            payload: 5,
          })
        }
      >
        +5
      </button>
    </div>
  );
}

export default Counter;

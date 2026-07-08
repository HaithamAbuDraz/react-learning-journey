import { useMemo, useState } from 'react';

function ExpensiveCalculation() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState(false);

  const factorial = useMemo(() => {
    console.log('Calculating...');

    function calc(n) {
      if (n <= 1) return 1;
      return n * calc(n - 1);
    }

    return calc(number);
  }, [number]);

  return (
    <div>
      <h2>Factorial: {factorial}</h2>

      <button onClick={() => setNumber((prev) => prev + 1)}>
        Increase Number
      </button>

      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
    </div>
  );
}

export default ExpensiveCalculation;

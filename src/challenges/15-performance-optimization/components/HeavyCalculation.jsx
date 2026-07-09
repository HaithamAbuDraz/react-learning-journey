import { useState, useMemo } from 'react';

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function findNthPrime(n) {
  console.log('Calculating nth prime...');
  let count = 0;
  let num = 1;
  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }
  return num;
}

function HeavyCalculation() {
  const [nth, setNth] = useState(10);
  const [theme, setTheme] = useState('light');

  const prime = useMemo(() => {
    return findNthPrime(nth);
  }, [nth]);

  const backgroundColor = theme === 'light' ? '#fff' : '#333';
  const textColor = theme === 'light' ? '#333' : '#fff';

  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor,
        color: textColor,
        transition: 'all 0.3s ease',
      }}
    >
      <h2>🧮 Heavy Calculation</h2>

      <p>
        The <strong>nth</strong> prime number:
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type='number'
          value={nth}
          onChange={(e) => setNth(Number(e.target.value))}
          min='1'
          max='10000'
          style={{
            padding: '8px',
            width: '100px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          = {prime}
        </span>
      </div>

      <div style={{ marginTop: '15px' }}>
        <button
          onClick={() => setNth((prev) => Math.max(1, prev + 1))}
          style={{
            padding: '8px 16px',
            marginRight: '10px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Increment n
        </button>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ffa94d',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Toggle Theme
        </button>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
        Theme: {theme} (changing theme does NOT recalculate the prime)
      </p>
    </div>
  );
}

export default HeavyCalculation;

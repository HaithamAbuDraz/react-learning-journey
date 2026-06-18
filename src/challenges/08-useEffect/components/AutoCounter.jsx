import { useEffect, useState } from 'react';

function AutoCounter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h2>Auto Counter</h2>
      <h3 style={{ fontSize: '3rem' }}>{count}</h3>

      <button
        onClick={() => setIsRunning(!isRunning)}
        style={{
          padding: '10px 20px',
          backgroundColor: isRunning ? '#ff6b6b' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        {isRunning ? '⏸️ Pause' : '▶️ Resume'}
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#61dafb',
          color: '#333',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        🔄 Reset
      </button>
    </div>
  );
}

export default AutoCounter;

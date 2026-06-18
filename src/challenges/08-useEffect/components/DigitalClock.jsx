import { useEffect, useState } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [format, setFormat] = useState('24h');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  const getFormattedTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    if (format === '12h') {
      hours = hours % 12 || 12;
      return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    }
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const getDate = () => {
    return time.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '30px',
        backgroundColor: '#282c34',
        color: '#61dafb',
        borderRadius: '10px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <h2>🕐 Digital Clock</h2>

      <div
        style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          fontFamily: 'monospace',
        }}
      >
        {getFormattedTime()}
      </div>

      <div style={{ fontSize: '1.2rem', marginTop: '10px', color: '#abb2bf' }}>
        {getDate()}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => setFormat(format === '24h' ? '12h' : '24h')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#61dafb',
            color: '#282c34',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Switch to {format === '24h' ? '12h' : '24h'} Format
        </button>
      </div>
    </div>
  );
}

export default DigitalClock;

import { useEffect, useState } from 'react';

function BackgroundChanger() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? '#333' : '#fff';
    document.body.style.color = dark ? '#fff' : '#333';

    return () => {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#333';
    };
  }, [dark]);

  return (
    <div>
      <h2>Theme Switcher</h2>
      <p>Current theme: {dark ? '🌙 Dark' : '☀️ Light'}</p>
      <button
        onClick={() => setDark(!dark)}
        style={{
          padding: '10px 20px',
          backgroundColor: dark ? '#555' : '#61dafb',
          color: dark ? '#fff' : '#333',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default BackgroundChanger;

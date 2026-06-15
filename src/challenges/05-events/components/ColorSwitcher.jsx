import { useState } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('black');

  return (
    <div>
      <h2 style={{ color }}>React Events</h2>

      <button onClick={() => setColor('red')}>Red</button>

      <button onClick={() => setColor('blue')}>Blue</button>

      <button onClick={() => setColor('green')}>Green</button>

      <button onClick={() => setColor('purple')}>Purple</button>

      <button onClick={() => setColor('orange')}>Orange</button>
    </div>
  );
}

export default ColorSwitcher;

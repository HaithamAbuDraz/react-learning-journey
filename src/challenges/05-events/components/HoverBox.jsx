import { useState } from 'react';

function HoverBox() {
  const [message, setMessage] = useState('Hover over me');

  return (
    <div
      onMouseEnter={() => setMessage('Mouse Entered')}
      onMouseLeave={() => setMessage('Mouse Left')}
      style={{
        border: '1px solid black',
        padding: '20px',
        width: '200px',
      }}
    >
      {message}
    </div>
  );
}

export default HoverBox;

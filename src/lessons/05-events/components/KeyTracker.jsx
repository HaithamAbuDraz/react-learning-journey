import { useState } from 'react';

function KeyTracker() {
  const [keyPressed, setKeyPressed] = useState('');

  const handleKeyDown = (event) => setKeyPressed(event.key);

  return (
    <div>
      <input type='text' placeholder='Press a key' onKeyDown={handleKeyDown} />
      <p>Key Pressed: {keyPressed || 'Nothing yet!'}</p>
    </div>
  );
}

export default KeyTracker;

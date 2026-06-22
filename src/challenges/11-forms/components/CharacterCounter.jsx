import { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Character Counter</h2>

      <textarea
        placeholder='Type something...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows='4'
        cols='40'
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      <p>
        <strong>Characters:</strong> {text.length}
      </p>
      <p>
        <strong>Words:</strong>{' '}
        {text.trim() ? text.trim().split(/\s+/).length : 0}
      </p>
    </div>
  );
}

export default CharacterCounter;

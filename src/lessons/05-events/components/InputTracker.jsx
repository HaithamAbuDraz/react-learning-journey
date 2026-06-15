import { useState } from 'react';

function InputTracker() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Live Input</h2>

      <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={handleChange}
      />

      <p>Hello, {name || 'Guest'}!</p>
    </div>
  );
}

export default InputTracker;

import { useState } from 'react';

function BasicForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Basic Form</h2>

      <input
        type='text'
        placeholder='Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type='submit'>Submit</button>
    </form>
  );
}

export default BasicForm;

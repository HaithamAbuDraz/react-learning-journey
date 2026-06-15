import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default UserForm;

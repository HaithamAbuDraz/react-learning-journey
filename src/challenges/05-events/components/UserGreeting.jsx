import { useState } from 'react';

function UserGreeting() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim()) {
      alert(`Welcome ${name}! 🎉`);
    } else {
      alert('Please enter your name!');
    }
  };

  return (
    <div>
      <h2>User Greeting</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type='submit'>Submit</button>
      </form>

      <h3>Hello, {name || 'Guest'}! 👋</h3>
    </div>
  );
}

export default UserGreeting;

import { useState } from 'react';

function UserGreeting() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Greeting
      </button>

      {showMessage && <p>Hello React Developer!</p>}
    </div>
  );
}

export default UserGreeting;

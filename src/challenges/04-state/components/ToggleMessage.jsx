import { useState } from 'react';

function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>

      {show && <p>Hello React!</p>}
    </div>
  );
}

export default ToggleMessage;

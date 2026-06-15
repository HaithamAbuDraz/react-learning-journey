import { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h2>Button Clicks: {count}</h2>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickCounter;

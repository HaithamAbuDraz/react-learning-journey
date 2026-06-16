import { useState } from 'react';

function AgeChecker() {
  const [age, setAge] = useState(22);

  return (
    <div>
      <h2>Age Checker</h2>

      <div>
        <label>Age: </label>
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          min='0'
          max='120'
        />
      </div>

      <h3>{age >= 18 ? '✅ Adult' : '❌ Minor'}</h3>
    </div>
  );
}

export default AgeChecker;

import { useState } from 'react';

function SelectRole() {
  const [role, setRole] = useState('Student');

  return (
    <div>
      <h2>Select Role</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '1rem',
        }}
      >
        <option value='Student'>Student</option>
        <option value='Developer'>Developer</option>
        <option value='Designer'>Designer</option>
        <option value='Manager'>Manager</option>
      </select>

      <p>
        <strong>Selected role:</strong> {role}
      </p>
    </div>
  );
}

export default SelectRole;

import { useState } from 'react';

function PasswordStrength() {
  const [password, setPassword] = useState('');

  const getStrength = () => {
    const length = password.length;
    if (length === 0) return '';
    if (length < 4) return { label: 'Very Weak', color: '#ff6b6b' };
    if (length < 8) return { label: 'Weak', color: '#ffa94d' };
    if (length < 12) return { label: 'Medium', color: '#ffd43b' };
    return { label: 'Strong', color: '#51cf66' };
  };

  const strength = getStrength();

  return (
    <div>
      <h2>Password Strength</h2>

      <input
        type='password'
        placeholder='Enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: '8px',
          width: '250px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      {password && (
        <p style={{ color: strength.color, fontWeight: 'bold' }}>
          {strength.label}
        </p>
      )}

      <p style={{ fontSize: '14px', color: '#666' }}>
        {password.length === 0
          ? 'Enter a password to check strength'
          : `Length: ${password.length} characters`}
      </p>
    </div>
  );
}

export default PasswordStrength;

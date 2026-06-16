import { useState } from 'react';

function LoginSystem() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isLoggedIn ? (
        // Logged In View
        <div>
          <h1>📊 Dashboard</h1>
          <h2>Welcome, {username}!</h2>
          <p>You are now logged in.</p>

          <div style={{ marginTop: '20px' }}>
            <h3>Your Profile</h3>
            <p>
              <strong>Username:</strong> {username}
            </p>
            <p>
              <strong>Status:</strong> Active
            </p>
            <p>
              <strong>Member since:</strong> 2022
            </p>
          </div>

          <button
            onClick={handleLogout}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        // Login View
        <div>
          <h1>🔐 Login Page</h1>

          <form onSubmit={handleLogin}>
            <div>
              <label>Username: </label>
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter username'
                required
              />
            </div>

            <div>
              <label>Password: </label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'
                required
              />
            </div>

            <button
              type='submit'
              style={{
                padding: '10px 20px',
                backgroundColor: '#61dafb',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginSystem;

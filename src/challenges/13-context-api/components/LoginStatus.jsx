import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

function LoginStatus() {
  const { isLoggedIn, user, login, logout, register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      setEmail('');
      setPassword('');
      setName('');
    } else alert('Login failed. Please try again.');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const success = register(name, email, password);
    if (success) {
      setEmail('');
      setPassword('');
      setName('');
      setIsRegistering(false);
      alert('Registration successful! Please login.');
    } else {
      alert('Registration failed. Please try again.');
    }
  };

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setEmail('');
    setPassword('');
    setName('');
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Logged In</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>

      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        {isRegistering && (
          <div>
            <input
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type='submit'>{isRegistering ? 'Register' : 'Login'}</button>

        <p>
          <button
            type='button'
            onClick={toggleMode}
          >
            {isRegistering
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </button>
        </p>

        {!isRegistering && (
          <p>
            Use any email and password to login
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginStatus;

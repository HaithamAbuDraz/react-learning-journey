import { useReducer } from 'react';
import { formReducer } from '../reducer/formReducer';

function FormApp() {
  const [state, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    password: '',
    errors: {},
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { field: name, value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'VALIDATE_FORM' });
  };

  if (state.submitted) {
    return (
      <div style={{ maxWidth: '400px' }}>
        <h2>✅ Form Submitted!</h2>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '4px',
            color: '#155724',
          }}
        >
          <p>
            <strong>Name:</strong> {state.name}
          </p>
          <p>
            <strong>Email:</strong> {state.email}
          </p>
          <button
            onClick={() => dispatch({ type: 'RESET_FORM' })}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '400px' }}>
      <h2>📝 Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name *</label>
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={handleChange}
            placeholder='Enter your name'
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: state.errors.name
                ? '2px solid #ff6b6b'
                : '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
          {state.errors.name && (
            <p
              style={{
                color: '#ff6b6b',
                margin: '5px 0 0',
                fontSize: '0.9rem',
              }}
            >
              {state.errors.name}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email *</label>
          <input
            type='email'
            name='email'
            value={state.email}
            onChange={handleChange}
            placeholder='Enter your email'
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: state.errors.email
                ? '2px solid #ff6b6b'
                : '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
          {state.errors.email && (
            <p
              style={{
                color: '#ff6b6b',
                margin: '5px 0 0',
                fontSize: '0.9rem',
              }}
            >
              {state.errors.email}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Password *</label>
          <input
            type='password'
            name='password'
            value={state.password}
            onChange={handleChange}
            placeholder='Enter your password'
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: state.errors.password
                ? '2px solid #ff6b6b'
                : '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
          {state.errors.password && (
            <p
              style={{
                color: '#ff6b6b',
                margin: '5px 0 0',
                fontSize: '0.9rem',
              }}
            >
              {state.errors.password}
            </p>
          )}
        </div>

        <button
          type='submit'
          style={{
            padding: '10px 20px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            width: '100%',
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default FormApp;

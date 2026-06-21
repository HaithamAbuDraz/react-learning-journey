import useInput from '../hooks/useInput';

function InputDemo() {
  const name = useInput('');
  const email = useInput('');
  const age = useInput('');

  return (
    <div>
      <h2>Input Demo</h2>

      <div>
        <label>Name: </label>
        <input {...name} placeholder='Enter name' />
      </div>

      <div>
        <label>Email: </label>
        <input {...email} placeholder='Enter email' />
      </div>

      <div>
        <label>Age: </label>
        <input {...age} placeholder='Enter age' />
      </div>

      <div style={{ marginTop: '10px' }}>
        <h3>Live Preview</h3>
        <p>
          <strong>Name:</strong> {name.value || 'Not set'}
        </p>
        <p>
          <strong>Email:</strong> {email.value || 'Not set'}
        </p>
        <p>
          <strong>Age:</strong> {age.value || 'Not set'}
        </p>
      </div>

      <button
        onClick={() => {
          name.reset();
          email.reset();
          age.reset();
        }}
      >
        Reset All
      </button>
    </div>
  );
}

export default InputDemo;

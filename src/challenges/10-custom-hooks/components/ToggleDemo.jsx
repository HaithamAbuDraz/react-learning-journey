import useDocumentTitle from '../hooks/useDocumentTitle';
import useToggle from '../hooks/useToggle';

function ToggleDemo() {
  const { value: isOn, toggle, setTrue, setFalse } = useToggle();
  useDocumentTitle(isOn ? 'ON Mode' : 'OFF Mode');

  return (
    <div>
      <h2>Toggle Demo</h2>

      <div
        style={{
          padding: '20px',
          backgroundColor: isOn ? '#4CAF50' : '#ff6b6b',
          color: 'white',
          borderRadius: '8px',
          marginBottom: '10px',
        }}
      >
        <h3>Status: {isOn ? 'ON ✅' : 'OFF ❌'}</h3>
      </div>

      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Set ON</button>
      <button onClick={setFalse}>Set OFF</button>
    </div>
  );
}

export default ToggleDemo;

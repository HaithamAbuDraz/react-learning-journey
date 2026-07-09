import { useState, useCallback } from 'react';
import TodoItem from './TodoItem';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React.memo', completed: false },
    { id: 2, text: 'Practice useCallback', completed: false },
    { id: 3, text: 'Build a Todo App', completed: true },
  ]);

  const [inputText, setInputText] = useState('');

  const handleAddTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (inputText.trim()) {
        setTodos((prev) => [
          ...prev,
          { id: Date.now(), text: inputText.trim(), completed: false },
        ]);
        setInputText('');
      }
    },
    [inputText],
  );

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const handleClearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  }, []);

  return (
    <div style={{ maxWidth: '500px' }}>
      <h2>📝 Todo App (Memoized)</h2>

      <form onSubmit={handleAddTodo} style={{ display: 'flex', gap: '10px' }}>
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder='Add a new todo...'
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type='submit'
          style={{
            padding: '8px 16px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </form>

      <div style={{ marginTop: '10px' }}>
        <button
          onClick={handleClearCompleted}
          style={{
            padding: '4px 12px',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Clear Completed
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
        {todos.length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>No todos yet!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoApp;

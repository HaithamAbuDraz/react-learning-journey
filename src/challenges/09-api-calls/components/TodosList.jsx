import { useEffect, useState } from 'react';

function TodosList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
        );

        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }

        const data = await response.json();
        setTodos(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  if (loading) {
    return <h2>📋 Loading todos...</h2>;
  }

  if (error) {
    return <h2>❌ Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Todo List</h2>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>

      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          style={{
            padding: '10px',
            marginBottom: '5px',
            backgroundColor: todo.completed ? '#d4edda' : '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>
            {todo.completed ? '✅' : '☐'}
          </span>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#6c757d' : '#333',
            }}
          >
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TodosList;

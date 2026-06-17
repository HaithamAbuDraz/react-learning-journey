import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn JSX', completed: false },
    { id: 2, text: 'Learn Props', completed: false },
    { id: 3, text: 'Learn State', completed: true },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
        },
        ...todos,
      ]);
      setNewTodo('');
    }
  };

  const clearCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.completed);

    if (completedTodos.length === 0) {
      alert('No completed todos to clear!');
      return;
    }

    if (
      window.confirm('Are you sure you want to delete these completed todos?')
    ) {
      setTodos(todos.filter((todo) => !todo.completed));
    }
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div>
      <h2>📝 Todo List</h2>

      <div style={{ marginBottom: '10px' }}>
        <span>
          <strong>Total: </strong>
          {todos.length}
        </span>
        <span style={{ marginLeft: '10px' }}>
          <strong>Completed: </strong>
          {todos.filter((t) => t.completed).length}
        </span>
        <span style={{ marginLeft: '10px' }}>
          <strong>Pending: </strong>
          {todos.filter((t) => !t.completed).length}
        </span>
      </div>

      <div>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Add a new todo...'
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />

        <button onClick={addTodo} style={{ marginLeft: '10px' }}>
          Add
        </button>

        <button onClick={clearCompleted} style={{ marginLeft: '10px' }}>
          Clear Completed
        </button>
      </div>

      <div>
        <ul>
          {todos.length === 0 ? (
            <p style={{ color: '#999' }}>No todos yet. Add one above!</p>
          ) : (
            todos.map((todo) => (
              <li key={todo.id}>
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                  }}
                >
                  {todo.text}
                </span>

                <button
                  onClick={() => toggleCompleted(todo.id)}
                  style={{ marginLeft: '10px' }}
                >
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

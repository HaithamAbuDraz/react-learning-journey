import { useReducer, useState } from 'react';
import { todoReducer } from '../reducer/todoReducer';

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [
      { id: 1, text: 'Learn useReducer', completed: true },
      { id: 2, text: 'Build a Todo App', completed: false },
      { id: 3, text: 'Master React', completed: false },
    ],
    filter: 'all',
  });

  const [inputText, setInputText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputText });
      setInputText('');
    }
  };

  const getFilteredTodos = () => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter((todo) => !todo.completed);
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      default:
        return state.todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const activeCount = state.todos.filter((todo) => !todo.completed).length;

  return (
    <div style={{ maxWidth: '500px' }}>
      <h2>📝 Todo List</h2>

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

      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
          style={{
            padding: '4px 12px',
            backgroundColor: state.filter === 'all' ? '#61dafb' : '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          All ({state.todos.length})
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
          style={{
            padding: '4px 12px',
            backgroundColor: state.filter === 'active' ? '#61dafb' : '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Active ({activeCount})
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
          style={{
            padding: '4px 12px',
            backgroundColor:
              state.filter === 'completed' ? '#61dafb' : '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Completed ({state.todos.length - activeCount})
        </button>
        <button
          onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
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
        {filteredTodos.length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>No todos here!</p>
        ) : (
          filteredTodos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                marginBottom: '5px',
                backgroundColor: todo.completed ? '#d4edda' : '#f8f9fa',
                border: '1px solid #ddd',
                borderRadius: '4px',
                gap: '10px',
              }}
            >
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() =>
                  dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
                }
              />
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#6c757d' : '#333',
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() =>
                  dispatch({ type: 'DELETE_TODO', payload: todo.id })
                }
                style={{
                  padding: '4px 8px',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoApp;

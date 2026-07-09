import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  console.log(`Rendering TodoItem ${todo.id}`);

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
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
        onChange={() => onToggle(todo.id)}
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
        onClick={() => onDelete(todo.id)}
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
  );
}

// Memoize the component to prevent re-renders unless props change
export default React.memo(TodoItem);

import { useState } from 'react';

function ConditionalList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Haitham' },
    { id: 2, name: 'Ahmed' },
    { id: 3, name: 'Sara' },
  ]);

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `User ${users.length + 1}`,
    };
    setUsers([...users, newUser]);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <div>
      <h2>Conditional List</h2>

      <button onClick={addUser}>Add User</button>
      <button onClick={clearUsers}>Clear All</button>

      {users.length === 0 ? (
        <p style={{ color: '#888', fontStyle: 'italic' }}>
          No users found. Add some users! 👤
        </p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} style={{ margin: '5px 0' }}>
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ConditionalList;

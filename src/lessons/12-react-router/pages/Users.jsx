import { Link } from 'react-router-dom';

function Users() {
  const users = [
    { id: 1, name: 'Haitham Abu Draz' },
    { id: 2, name: 'Ahmed Rami' },
    { id: 3, name: 'Mohand Yaser' },
    { id: 4, name: 'Mohammed Ezz' },
  ];

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

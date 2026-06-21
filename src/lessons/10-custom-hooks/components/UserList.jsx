import useFetch from '../hooks/useFetch';

function UserList() {
  const {
    data: users,
    loading,
    error,
  } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UserList;

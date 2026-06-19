import { useEffect, useState } from 'react';

function UserFetcher() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Phone: </strong>
        {user.phone}
      </p>
    </div>
  );
}

export default UserFetcher;

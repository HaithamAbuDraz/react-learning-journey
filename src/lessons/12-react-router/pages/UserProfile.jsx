import { Link, useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  const users = {
    1: {
      id: 1,
      name: 'Haitham Abu Draz',
      email: 'haithamabudraz@gmail.com',
      role: 'Admin',
    },
    2: {
      id: 2,
      name: 'Ahmed Rami',
      email: 'ahmedrami@gmail.com',
      role: 'Moderator',
    },
    3: {
      id: 3,
      name: 'Mohand Yaser',
      email: 'mohandyaser@gmail.com',
      role: 'User',
    },
    4: {
      id: 4,
      name: 'Mohammed Ezz',
      email: 'mohammedezz@gmail.com',
      role: 'User',
    },
  };

  const user = users[id];

  return (
    <div>
      <Link to='/users'>← Back to Users</Link>
      <h1>User Profile</h1>
      <h2>ID: {user.id}</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
}

export default UserProfile;

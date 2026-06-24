import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserInfo() {
  const user = useContext(UserContext);

  return (
    <div>
      <h4>User Information</h4>

      <p>Name: {user.name}</p>

      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserInfo;

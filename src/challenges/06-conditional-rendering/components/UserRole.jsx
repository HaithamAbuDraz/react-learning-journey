import { useState } from 'react';

function UserRole() {
  const [role, setRole] = useState('admin');

  return (
    <div>
      <h2>User Role</h2>

      <div>
        <button onClick={() => setRole('admin')}>Admin</button>
        <button onClick={() => setRole('user')}>User</button>
        <button onClick={() => setRole('guest')}>Guest</button>
      </div>

      {role === 'admin' ? (
        <div>
          <h3>🔐 Admin Pane</h3>
          <p>You have full access to all features</p>
          <ul>
            <li>Manage users</li>
            <li>Edit content</li>
            <li>View analytics</li>
          </ul>
        </div>
      ) : role === 'user' ? (
        <div>
          <h3>👤 User Dashboard</h3>
          <p>You have limited access</p>
          <ul>
            <li>View content</li>
            <li>Edit profile</li>
          </ul>
        </div>
      ) : (
        <div>
          <h3>👋 Guest View</h3>
          <p>You have read-only access</p>
          <ul>
            <li>View public content</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default UserRole;

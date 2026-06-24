import UserContext from '../context/UserContext';

function UserProvider({ children }) {
  const user = {
    id: 1,
    name: 'Haitham',
    role: 'Software Engineer',
  };

  return (
    <div>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </div>
  );
}

export default UserProvider;

import { useState } from 'react';
import AuthContext from '../context/AuthContext';

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email && password) {
      setIsLoggedIn(true);
      setUser({
        id: 1,
        name: 'Haitham',
        email: email,
        role: 'admin',
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const register = (name, email, password) => {
    if (name && email && password) {
      setIsLoggedIn(true);
      setUser({
        id: Date.now(),
        name: name,
        email: email,
        role: 'user',
      });
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

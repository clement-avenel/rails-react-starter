import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { authenticate, destroy_session, getUser } from 'utils/auth_api_util';

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getAuthStatus = async () => {
      const current_user = await getUser();
      setUser(current_user);
    };
    getAuthStatus();
  }, []);

  const login = async (email, password) => {
    authenticate(email, password)
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logout = () => {
    destroy_session()
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthContext;

import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('rails_react_session');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem('rails_react_session', JSON.stringify(userToken.jti));
    setToken(JSON.stringify(userToken.jti));
  };

  return {
    setToken: saveToken,
    token
  };
}

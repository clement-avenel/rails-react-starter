import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { checkAuth } from 'utils/auth_api_util';

const PrivateRoute = () => {
  const [isAuthenticated, setAuthStatus] = useState([]);

  useEffect(() => {
    async function getAuthStatus() {
      const status = await checkAuth();
      setAuthStatus(status);
    }
    getAuthStatus();
  }, []);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

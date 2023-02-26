import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from 'hooks/useAuthContext';
import { useEffect, useState } from 'react';

const PrivateRoute = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user !== null) {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return null;
  }

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;

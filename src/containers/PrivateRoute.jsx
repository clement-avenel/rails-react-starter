import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from 'hooks/useAuthContext';

const PrivateRoute = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate replace to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;

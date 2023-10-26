import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const token = useSelector((state) => state.token.value);
  const location = useLocation();

  if (!token) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

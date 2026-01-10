import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import type { RootState } from '../../lib/store';
import type { FC, ReactNode } from 'react';

type TProtectedRoute = {
  children: ReactNode;
};

export const ProtectedRoute: FC<TProtectedRoute> = ({ children }) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  console.log(isAuth);
  const redirectTo = '/';
  const location = useLocation();

  if (isAuth) {
    return <>{children}</>;
  } else {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }
};

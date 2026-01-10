import {
  LoginPage,
  RegisterPage,
  SpherePage,
  DashboardPage,
  HabbitsPage,
  AnalyticsPage,
} from '@/pages';
import { ProtectedRoute } from '@/shared';
import { createBrowserRouter } from 'react-router-dom';
import { RouterSync } from '../providers/routerSync/routerSync';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/registration',
    element: <RegisterPage />,
  },
  {
    path: '/dashboard',
    element: (
      <>
        <RouterSync />
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: '/sphere',
    element: (
      <>
        <RouterSync />
        <ProtectedRoute>
          <SpherePage />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: '/habbits',
    element: (
      <>
        <RouterSync />
        <ProtectedRoute>
          <HabbitsPage />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: '/analytics',
    element: (
      <>
        <RouterSync />
        <ProtectedRoute>
          <AnalyticsPage />
        </ProtectedRoute>
      </>
    ),
  },
]);

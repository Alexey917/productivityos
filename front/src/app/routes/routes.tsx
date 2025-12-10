import {
  LoginPage,
  RegisterPage,
  SpherePage,
  DashboardPage,
  HabbitsPage,
  AnalyticsPage,
} from '@/pages';
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
        <DashboardPage />
      </>
    ),
  },
  {
    path: '/sphere',
    element: (
      <>
        <RouterSync />
        <SpherePage />
      </>
    ),
  },
  {
    path: '/habbits',
    element: (
      <>
        <RouterSync />
        <HabbitsPage />
      </>
    ),
  },
  {
    path: '/analytics',
    element: (
      <>
        <RouterSync />
        <AnalyticsPage />
      </>
    ),
  },
]);

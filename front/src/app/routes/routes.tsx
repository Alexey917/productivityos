import { SpherePage } from '@/pages';
import { DashboardPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { RouterSync } from '../providers/storeProvider/routerSync';

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <SpherePage />,
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
      </>
    ),
  },
  {
    path: '/analytics',
    element: (
      <>
        <RouterSync />
      </>
    ),
  },
]);

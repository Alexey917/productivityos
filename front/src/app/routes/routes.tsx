import { SpherePage } from '@/pages';
import { DashboardPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <SpherePage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/sphere',
    element: <SpherePage />,
  },
  {
    path: '/habbits',
    // element: <SpherePage />,
  },
  {
    path: '/analytics',
    // element: <SpherePage />,
  },
]);

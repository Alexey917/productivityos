import { SpherePage } from '@/pages';
import { DashboardPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { RouterSync } from '../providers/storeProvider/routerSync';
import { HabbitsPage } from '@/pages/habbits';
import { AnalyticsPage } from '@/pages/analytics';

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

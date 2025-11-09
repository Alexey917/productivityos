import { Sidebar } from '@/widgets';

import classes from './Dashboard.module.css';

export const DashboardPage = () => {
  return (
    <div className={classes.dashboard}>
      <Sidebar />
    </div>
  );
};

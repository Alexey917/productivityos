import { Sidebar } from '@/widgets';

import classes from './SpherePage.module.css';

export const SpherePage = () => {
  return (
    <div className={classes.sphere}>
      <Sidebar />
      <main className="container"></main>
    </div>
  );
};

import { Logo } from '@/shared';
import SidebarNav from '../SidebarNav/SidebarNav';
import { SidebarToggle } from '../SidebarToggle/SidebarToggle';

import classes from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <Logo />
      <SidebarNav />
      <SidebarToggle />
    </aside>
  );
};

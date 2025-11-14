import { Logo } from '@/shared';
import SidebarNav from '../SidebarNav/SidebarNav';
import { SidebarToggle } from '../SidebarToggle/SidebarToggle';
import type { RootState } from '@/shared';

import classes from './Sidebar.module.css';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);
  const sidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <aside
      className={
        sidebarOpen
          ? `${classes.sidebar} ${classes[colorTheme]}`
          : `${classes.closedSidebar} ${classes[colorTheme]}`
      }
    >
      <Logo />
      <SidebarNav />
      <SidebarToggle />
    </aside>
  );
};

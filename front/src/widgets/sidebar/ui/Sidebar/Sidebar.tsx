import { useState } from 'react';
import { Logo } from '@/shared';
import SidebarNav from '../SidebarNav/SidebarNav';
import { SidebarToggle } from '../SidebarToggle/SidebarToggle';
import type { RootState } from '@/shared';

import classes from './Sidebar.module.css';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={isOpen ? classes.sidebar : classes.closedSidebar}>
      <Logo isOpen={isOpen} />
      <SidebarNav isOpen={isOpen} />
      <SidebarToggle toggle={toggle} isOpen={isOpen} />
    </aside>
  );
};

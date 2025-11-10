import { createContext, useState } from 'react';
import { Logo } from '@/shared';
import SidebarNav from '../SidebarNav/SidebarNav';
import { SidebarToggle } from '../SidebarToggle/SidebarToggle';

import classes from './Sidebar.module.css';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

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

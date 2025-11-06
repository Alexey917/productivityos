import { Logo } from '@/shared';
import SidebarNav from '../SidebarNav/SidebarNav';
import { SidebarToggle } from '../SidebarToggle/SidebarToggle';

export const Sidebar = () => {
  return (
    <aside>
      <Logo />
      <SidebarNav />
      <SidebarToggle />
    </aside>
  );
};

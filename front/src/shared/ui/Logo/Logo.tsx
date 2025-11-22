import classes from './Logo.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared/lib/store';

export const Logo = () => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);
  const sidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <h2 className={sidebarOpen ? `${classes.logo}` : `${classes.hidden}`}>
      <span className={`${classes.text} ${classes[colorTheme]}`}>
        ProductivityOS
      </span>
    </h2>
  );
};

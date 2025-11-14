import classes from './SidebarToggle.module.css';
import { SidebarArrow } from '../SidebarArrow/SidebarArrow';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/features';

export const SidebarToggle = () => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);
  const sidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={
        sidebarOpen
          ? `${classes.btn} ${classes[colorTheme]}`
          : `${classes.closedBtn} ${classes[colorTheme]}`
      }
      onClick={() => dispatch(toggleSidebar(sidebarOpen))}
    >
      <span>
        <SidebarArrow
          one={classes.one}
          two={classes.two}
          three={classes.three}
        />
      </span>
      <div className={classes.liquid}></div>
    </button>
  );
};

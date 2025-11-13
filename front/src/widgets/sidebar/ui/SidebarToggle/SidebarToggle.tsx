import classes from './SidebarToggle.module.css';
import { SidebarArrow } from '../SidebarArrow/SidebarArrow';
import type { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared';

interface IToggle {
  isOpen: boolean;
  toggle: () => void;
}

export const SidebarToggle: FC<IToggle> = ({ isOpen, toggle }) => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);

  return (
    <button
      type="button"
      className={
        isOpen
          ? `${classes.btn} ${classes[colorTheme]}`
          : `${classes.closedBtn} ${classes[colorTheme]}`
      }
      onClick={toggle}
    >
      <span>
        <SidebarArrow
          one={classes.one}
          two={classes.two}
          three={classes.three}
          isOpen={isOpen}
        />
      </span>
      <div className={classes.liquid}></div>
    </button>
  );
};

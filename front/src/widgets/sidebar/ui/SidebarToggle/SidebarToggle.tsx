import classes from './SidebarToggle.module.css';
import { SidebarArrow } from '../SidebarArrow/SidebarArrow';
import type { FC } from 'react';

interface IToggle {
  isOpen: boolean;
  toggle: () => void;
}

export const SidebarToggle: FC<IToggle> = ({ isOpen, toggle }) => {
  return (
    <button
      type="button"
      className={isOpen ? classes.btn : classes.closedBtn}
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

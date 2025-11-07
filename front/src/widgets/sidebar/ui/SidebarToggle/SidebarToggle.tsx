import btn from '@/shared/assets/sprite.svg';

import classes from './SidebarToggle.module.css';
import { SidebarArrow } from '../SidebarArrow/SidebarArrow';

export const SidebarToggle = () => {
  return (
    <button type="button" className={classes.btn}>
      {/* <svg className={classes.icon}>
        <use href={btn + '#sidebar-btn'}></use>
      </svg> */}
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

import type { ReactNode } from 'react';
import classes from './Modal.module.css';

export const Modal = (children: ReactNode) => {
  return (
    <div className={classes.modal}>
      <div className={classes.overlay}></div>
      {children}
    </div>
  );
};

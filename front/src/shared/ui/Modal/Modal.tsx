import type { FC, ReactNode } from 'react';
import classes from './Modal.module.css';

interface IModal {
  children: ReactNode;
}

export const Modal: FC<IModal> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.overlay}>{children}</div>
    </div>
  );
};

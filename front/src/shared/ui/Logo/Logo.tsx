import type { FC } from 'react';
import classes from './Logo.module.css';

interface ILogo {
  isOpen: boolean;
}

export const Logo: FC<ILogo> = ({ isOpen }) => {
  return (
    <h2 className={isOpen ? classes.logo : classes.hidden}>
      <span className={classes.text}>ProductivityOS</span>
    </h2>
  );
};

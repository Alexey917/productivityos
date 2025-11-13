import type { FC } from 'react';
import classes from './Logo.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared';

interface ILogo {
  isOpen: boolean;
}

export const Logo: FC<ILogo> = ({ isOpen }) => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);

  return (
    <h2 className={isOpen ? `${classes.logo}` : `${classes.hidden}`}>
      <span className={`${classes.text} ${classes[colorTheme]}`}>
        ProductivityOS
      </span>
    </h2>
  );
};

import { useSelector } from 'react-redux';
import type { RootState } from '@/shared/lib/store';

import classes from './CreateButton.module.css';
import plus from '../../assets/sprite.svg';

export const CreateButton = () => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);

  return (
    <button type="button" className={`${classes.btn} ${classes[colorTheme]}`}>
      <div className={classes.topLine}></div>
      <div className={classes.rightLine}></div>
      <div className={classes.bottomLine}></div>
      <div className={classes.leftLine}></div>
      <svg className={`${classes.icon}`}>
        <use href={plus + '#plus'}></use>
      </svg>
      <span className={classes.text}>Добавить сферу</span>
    </button>
  );
};

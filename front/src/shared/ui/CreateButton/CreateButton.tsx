import type { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared/lib/store';

import classes from './CreateButton.module.css';
import plus from '../../assets/sprite.svg';

interface ICreateButton {
  toggleModal: () => void;
}

export const CreateButton: FC<ICreateButton> = ({ toggleModal }) => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);

  return (
    <button
      type="button"
      className={`${classes.btn} ${classes[colorTheme]}`}
      onClick={toggleModal}
    >
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

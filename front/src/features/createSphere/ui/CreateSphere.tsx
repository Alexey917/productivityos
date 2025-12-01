import { FormButton, InputAnim, InputRadio } from '@/shared';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared/lib/store';

import classes from './CreateSphere.module.css';
import close from '@/shared/assets/sprite.svg';
import { useRef, type FC } from 'react';

interface ICreateSphere {
  toggleModal: () => void;
}

export const CreateSphere: FC<ICreateSphere> = ({ toggleModal }) => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);

  return (
    <div className={classes.content}>
      <button type="button" className={classes.btn} onClick={toggleModal}>
        <svg className={`${classes.icon} ${classes[colorTheme]}`}>
          <use href={close + '#close'}></use>
        </svg>
      </button>
      <form className={classes.form} action="#">
        <legend className={classes.legend}>Новая сфера</legend>
        <InputAnim placeholder="Название" />
        <div className={classes.radioGroup}>
          <InputRadio text="Спринт" />
          <InputRadio text="Обычный" />
        </div>
        <FormButton text="Создать сферу" toggleModal={toggleModal} />
      </form>
    </div>
  );
};

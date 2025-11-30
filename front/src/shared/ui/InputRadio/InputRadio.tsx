import type { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared/lib/store';

import classes from './InputRadio.module.css';

interface IInputRadio {
  text: string;
}

export const InputRadio: FC<IInputRadio> = ({ text }) => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);

  return (
    <label htmlFor={text} className={`${classes.label} ${classes[colorTheme]}`}>
      <input type="radio" id={text} name="radio" className={classes.input} />
      {text}
    </label>
  );
};

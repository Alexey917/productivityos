import type { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared/lib/store';

import classes from './FormButton.module.css';

interface IFromButton {
  text: string;
  toggleModal?: () => void;
}

export const FormButton: FC<IFromButton> = ({ text, toggleModal }) => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);

  return (
    <button
      type="submit"
      className={`${classes.btn} ${classes[colorTheme]}`}
      onClick={toggleModal}
    >
      {text}
    </button>
  );
};

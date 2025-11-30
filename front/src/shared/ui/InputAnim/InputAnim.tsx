import { useState, type FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared/lib/store';

import classes from './InputAnim.module.css';

interface IInputAnim {
  placeholder: string;
}

export const InputAnim: FC<IInputAnim> = ({ placeholder }) => {
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);
  const [isFocused, setFocused] = useState<boolean>(false);

  return (
    <div
      className={`${classes.inputWrapper} ${classes[colorTheme]} ${
        isFocused ? classes.focused : ''
      }`}
    >
      <input
        type="text"
        className={`${classes.input} ${classes[colorTheme]}`}
        placeholder={placeholder}
        name={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

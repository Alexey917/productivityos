import { useState, type FC, forwardRef } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/shared/lib/store';

import classes from './InputAnim.module.css';

// interface IInputAnim {
//   placeholder: string;
// }

type Props = {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  name?: string;
  type: string;
};

export const InputAnim = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, onChange, onBlur, name, type }, ref) => {
    const colorTheme = useSelector(
      (state: RootState) => state.colorTheme.color,
    );
    const [isFocused, setFocused] = useState<boolean>(false);

    return (
      <div
        className={`${classes.inputWrapper} ${classes[colorTheme]} ${
          isFocused ? classes.focused : ''
        }`}
      >
        <input
          ref={ref}
          type={type}
          className={`${classes.input} ${classes[colorTheme]}`}
          placeholder={placeholder}
          name={name ? name : placeholder}
          onChange={onChange}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.();
          }}
          onFocus={() => setFocused(true)}
        />
      </div>
    );
  },
);

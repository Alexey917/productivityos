import type { FC } from 'react';
import classes from './Loader.module.css';

interface ILoader {
  containerSize?: number;
  liquidSize?: number;
  theme: 'login';
}

export const Loader: FC<ILoader> = ({
  containerSize = 80,
  liquidSize = 27,
  theme,
}) => {
  return (
    <div
      className={classes.container}
      style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
    >
      <div
        className={`${classes.liquid} ${classes[theme]}`}
        style={{ width: `${liquidSize}px`, height: `${liquidSize}px` }}
      ></div>
      <div
        className={`${classes.liquid} ${classes[theme]}`}
        style={{ width: `${liquidSize}px`, height: `${liquidSize}px` }}
      ></div>
      <div
        className={`${classes.liquid} ${classes[theme]}`}
        style={{ width: `${liquidSize}px`, height: `${liquidSize}px` }}
      ></div>
      <div
        className={`${classes.liquid} ${classes[theme]}`}
        style={{ width: `${liquidSize}px`, height: `${liquidSize}px` }}
      ></div>
      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 20 -10
          "
          />
        </filter>
      </svg>
    </div>
  );
};

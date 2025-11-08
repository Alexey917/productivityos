import type { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './CustomLink.module.css';

interface ICustomLink {
  text: string;
  to: string;
  svg?: boolean;
  svgPath?: string;
  isOpen?: boolean;
}

export const CustomLink: FC<ICustomLink> = ({
  text,
  to,
  svg,
  svgPath,
  isOpen,
}) => {
  console.log(isOpen);
  if (isOpen) {
    return (
      <Link to={to} className={classes.link}>
        {svg && (
          <svg className={classes.icon}>
            <use href={svgPath && svgPath}></use>
          </svg>
        )}
        <span className={classes.text}>{text}</span>
      </Link>
    );
  } else {
    return (
      <Link to={to} className={classes.link}>
        {svg && (
          <svg className={`${classes.icon} ${classes.hiddenLinks}`}>
            <use href={svgPath && svgPath}></use>
          </svg>
        )}
        <span className={classes.hiddenText}>{text}</span>
      </Link>
    );
  }
};

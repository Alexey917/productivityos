import type { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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
  if (isOpen) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${classes.active} ${classes.link}` : classes.link
        }
        // onClick={}
      >
        {svg && (
          <svg className={classes.icon}>
            <use href={svgPath && svgPath}></use>
          </svg>
        )}
        <span className={classes.text}>{text}</span>
      </NavLink>
    );
  } else {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${classes.active} ${classes.link}` : classes.link
        }
      >
        {svg && (
          <svg className={`${classes.icon} ${classes.hiddenLinks}`}>
            <use href={svgPath && svgPath}></use>
          </svg>
        )}
        <span className={classes.hiddenText}>{text}</span>
      </NavLink>
    );
  }
};

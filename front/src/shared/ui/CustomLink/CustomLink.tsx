import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared/lib/store';

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
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);

  if (isOpen) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${classes.active} ${classes.link}` : `${classes.link}`
        }
        // onClick={}
      >
        {svg && (
          <svg className={`${classes.icon} ${classes[colorTheme]}`}>
            <use href={svgPath && svgPath}></use>
          </svg>
        )}
        <span className={`${classes.text} ${classes[colorTheme]}`}>{text}</span>
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
          <svg
            className={`${classes.icon} ${classes.hiddenLinks} ${classes[colorTheme]}`}
          >
            <use href={svgPath && svgPath}></use>
          </svg>
        )}
        <span className={classes.hiddenText}>{text}</span>
      </NavLink>
    );
  }
};

import type { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './CustomLink.module.css';

interface ICustomLink {
  text: string;
  to: string;
  svg?: boolean;
  svgPath?: string;
}

export const CustomLink: FC<ICustomLink> = ({ text, to, svg, svgPath }) => {
  return (
    <Link to={to}>
      {svg && (
        <svg className={classes.icon}>
          <use href={svgPath && svgPath}></use>
        </svg>
      )}
      {text}
    </Link>
  );
};

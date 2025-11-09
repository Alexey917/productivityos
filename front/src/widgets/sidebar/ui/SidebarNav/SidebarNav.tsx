import { CustomLink } from '@/shared';
import dashboard from '@/shared/assets/sprite.svg';
import sphere from '@/shared/assets/sprite.svg';
import habbits from '@/shared/assets/sprite.svg';
import analytics from '@/shared/assets/sprite.svg';

import classes from './SidebarNav.module.css';
import type { FC } from 'react';

interface ISidebarNav {
  isOpen: boolean;
}

const SidebarNav: FC<ISidebarNav> = ({ isOpen }) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <CustomLink
            text="Дашбоард"
            to="/dashboard"
            svg={true}
            svgPath={dashboard + '#home'}
            isOpen={isOpen}
          />
        </li>

        <li className={classes.nav__item}>
          <CustomLink
            text="Сферы"
            to="/sphere"
            svg={true}
            svgPath={sphere + '#sphere'}
            isOpen={isOpen}
          />
        </li>

        <li className={classes.nav__item}>
          <CustomLink
            text="Привычки"
            to="/habbits"
            svg={true}
            svgPath={habbits + '#habbits'}
            isOpen={isOpen}
          />
        </li>

        <li className={classes.nav__item}>
          <CustomLink
            text="Аналитика"
            to="/analytics"
            svg={true}
            svgPath={analytics + '#analytics'}
            isOpen={isOpen}
          />
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;

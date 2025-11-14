import { CustomLink } from '@/shared';

import dashboard from '@/shared/assets/sprite.svg';
import sphere from '@/shared/assets/sprite.svg';
import habbits from '@/shared/assets/sprite.svg';
import analytics from '@/shared/assets/sprite.svg';

import classes from './SidebarNav.module.css';

const SidebarNav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <CustomLink
            text="Дашбоард"
            to="/dashboard"
            svg={true}
            svgPath={dashboard + '#home'}
          />
        </li>

        <li className={classes.nav__item}>
          <CustomLink
            text="Сферы"
            to="/sphere"
            svg={true}
            svgPath={sphere + '#sphere'}
          />
        </li>

        <li className={classes.nav__item}>
          <CustomLink
            text="Привычки"
            to="/habbits"
            svg={true}
            svgPath={habbits + '#habbits'}
          />
        </li>

        <li className={classes.nav__item}>
          <CustomLink
            text="Аналитика"
            to="/analytics"
            svg={true}
            svgPath={analytics + '#analytics'}
          />
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;

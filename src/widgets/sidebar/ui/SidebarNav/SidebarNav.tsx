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
        <li>
          <CustomLink
            text="Дашбоард"
            to="#"
            svg={true}
            svgPath={dashboard + '#home'}
          />
        </li>
        <CustomLink
          text="Сферы"
          to="#"
          svg={true}
          svgPath={sphere + '#sphere'}
        />
        <li></li>

        <li>
          <CustomLink
            text="Привычки"
            to="#"
            svg={true}
            svgPath={habbits + '#habbits'}
          />
        </li>

        <li>
          <CustomLink
            text="Аналитика"
            to="#"
            svg={true}
            svgPath={analytics + '#analytics'}
          />
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;

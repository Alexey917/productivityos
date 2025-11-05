import { CustomLink } from '@/shared';
import dashboard from '@/shared/assets/sprite.svg';
import sphere from '@/shared/assets/sprite.svg';
import habbits from '@/shared/assets/sprite.svg';
import analytics from '@/shared/assets/sprite.svg';

const SidebarNav = () => {
  return (
    <nav>
      <CustomLink
        text="Дашбоард"
        to="#"
        svg={true}
        svgPath={dashboard + '#dashboard'}
      />
      <CustomLink text="Сферы" to="#" svg={true} svgPath={sphere + '#sphere'} />
      <CustomLink
        text="Привычки"
        to="#"
        svg={true}
        svgPath={habbits + '#habbits'}
      />
      <CustomLink
        text="Аналитика"
        to="#"
        svg={true}
        svgPath={analytics + '#analytics'}
      />
    </nav>
  );
};

export default SidebarNav;

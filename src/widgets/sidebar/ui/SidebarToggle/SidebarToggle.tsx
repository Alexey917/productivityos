import btn from '@/shared/assets/sprite.svg';

export const SidebarToggle = () => {
  return (
    <button>
      <svg>
        <use href={btn + '#sidebar-btn'}></use>
      </svg>
    </button>
  );
};

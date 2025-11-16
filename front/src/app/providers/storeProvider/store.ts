import { createStore } from '@/shared/lib/store';
import { colorThemeReducer, sidebarReducer } from '@/features';

export const store = createStore({
  colorTheme: colorThemeReducer,
  sidebar: sidebarReducer,
});

import { configureStore } from '@reduxjs/toolkit';
import { colorThemeReducer, sidebarReducer } from '@/features';
import { authReducer } from '@/pages/login';

export const createStore = () => {
  return configureStore({
    reducer: {
      colorTheme: colorThemeReducer,
      sidebar: sidebarReducer,
      auth: authReducer,
    },
  });
};

export type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

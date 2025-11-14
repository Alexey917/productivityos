import { configureStore } from '@reduxjs/toolkit';
import { colorThemeReducer, sidebarReducer } from '@/features';

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { colorThemeReducer } from '@/features';

export default configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
  },
});

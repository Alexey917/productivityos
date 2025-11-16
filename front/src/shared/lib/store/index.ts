import { configureStore } from '@reduxjs/toolkit';

export const createStore = (reducers: Record<string, any> = {}) => {
  return configureStore({
    reducer: reducers,
  });
};

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

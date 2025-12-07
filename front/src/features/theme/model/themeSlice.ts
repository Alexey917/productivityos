import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IColorTheme {
  currentPath: string;
  color: string;
}

const initialState: IColorTheme = {
  currentPath: '/',
  color: 'blue',
};

const colorThemeSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setCurrentPath(state, action: PayloadAction<string>) {
      state.currentPath = action.payload;
    },

    // setColor(state, action: PayloadAction<string>) {
    //   state.color = action.payload;
    // },

    setColorByPath(state) {
      if (state.currentPath.includes('/dashboard')) {
        state.color = 'purple';
      } else if (state.currentPath.includes('/sphere')) {
        state.color = 'orange';
      } else if (state.currentPath.includes('/habbits')) {
        state.color = 'green';
      } else if (state.currentPath.includes('/analytics')) {
        state.color = 'red';
      } else {
        state.color = 'blue';
      }
    },
  },
});

export const { setCurrentPath, setColorByPath } = colorThemeSlice.actions;
export default colorThemeSlice.reducer;

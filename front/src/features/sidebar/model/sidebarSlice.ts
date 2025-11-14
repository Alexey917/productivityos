import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ISidebarSlice {
  isOpen: boolean;
}

const initialState: ISidebarSlice = {
  isOpen: true,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.isOpen = !action.payload;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;

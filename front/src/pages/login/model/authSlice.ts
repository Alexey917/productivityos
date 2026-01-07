import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IAuthStore {
  accessToken: string | null;
  csrfToken: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IAuthStore = {
  accessToken: localStorage.getItem('accessToken'),
  csrfToken: localStorage.getItem('csrfToken'),
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{ accessToken: string; csrfToken: string }>,
    ) => {
      const { accessToken, csrfToken } = action.payload;

      state.accessToken = accessToken;
      state.csrfToken = csrfToken;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('csrf', csrfToken);
    },

    updateAccessTokens: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      localStorage.setItem('accessToken', action.payload);
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    clearError: (state) => {
      state.error = null;
    },

    logout: (state) => {
      state.error = null;
      state.isLoading = false;
      state.accessToken = localStorage.remove('accessToken');
      state.csrfToken = localStorage.remove('csrfToken');
    },
  },
});

export const {
  setTokens,
  updateAccessTokens,
  setLoading,
  setError,
  clearError,
  logout,
} = loginSlice.actions;

export default loginSlice.reducer;

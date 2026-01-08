import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IAuthStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const checkAuth = () => {
  const token = localStorage.getItem('accessToken');
  return !!token;
};

const initialState: IAuthStore = {
  isAuthenticated: checkAuth(),
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

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('csrfToken', csrfToken);

      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },

    updateAccessTokens: (
      state,
      action: PayloadAction<{ accessToken: string; csrfToken: string }>,
    ) => {
      const { accessToken, csrfToken } = action.payload;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('csrfToken', csrfToken);
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
      localStorage.removeItem('accessToken');
      localStorage.removeItem('csrfToken');

      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
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

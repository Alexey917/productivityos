import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { client } from '@/shared';
import { useNavigate } from 'react-router-dom';

interface ILoginStore {
  accessToken: string | null;
  csrfToken: string | null;
}

const navigate = useNavigate();

const initialState: ILoginStore = {
  accessToken: null,
  csrfToken: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;

      client.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${state.accessToken}`;

      navigate('/dashboard');
    },

    setCsrfToken: (state, action: PayloadAction<string>) => {
      state.csrfToken = action.payload;
    },

    clearTokens: (state) => {
      state.accessToken = '';
      state.csrfToken = '';

      navigate('/login');
    },
  },
});

export const { setAccessToken, setCsrfToken, clearTokens } = loginSlice.actions;
export default loginSlice.reducer;

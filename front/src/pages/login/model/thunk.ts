import { createAsyncThunk } from '@reduxjs/toolkit';
import { client, getErrorMessage } from '@/shared';
import { loginApi } from '../api/login';
import type { ILoginData } from './types';
import { setTokens, setLoading, setError } from './authSlice';

export const loginThunk = createAsyncThunk(
  '/login',
  async (data: ILoginData, { dispatch }) => {
    dispatch(setLoading(true));

    try {
      const result = await loginApi.login(data);
      const { accessToken, csrfToken } = result;
      dispatch(setTokens({ accessToken, csrfToken }));
      client.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      return { accessToken, csrfToken };
    } catch (error: unknown) {
      const message = getErrorMessage(error, 'Ошибка авторизации');
      dispatch(setError(message));
      throw error;
    }
  },
);

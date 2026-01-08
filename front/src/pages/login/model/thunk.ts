import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '@/shared';
import { loginApi } from '../api/login';
import type { ILoginData } from './types';
import { setTokens, setLoading, setError } from './authSlice';
import { AxiosError } from 'axios';

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
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message || 'Ошибка авторизации';
        dispatch(setError(message));
      } else if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError('Неизвестная ошибка'));
      }

      throw error;
    }
  },
);

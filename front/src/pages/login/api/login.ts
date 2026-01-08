import { client } from '@/shared';
import type { ILoginData, ILoginResponse } from '../model/types';

export const loginApi = {
  login: async (loginData: ILoginData): Promise<ILoginResponse> => {
    const response = await client.post('/login', loginData, {
      withCredentials: true, // Браузер сам сохранит cookies
    });
    return response.data;
  },

  logout: async (): Promise<void> => {
    const response = await client.post(
      '/logout',
      {},
      {
        withCredentials: true,
      },
    );
    return response.data;
  },
};

import { client } from '../client';

export interface IRefreshResponse {
  accessToken: string;
  csrfToken: string;
}

export const refreshToken = async (): Promise<IRefreshResponse> => {
  const response = await client.post(
    '/refresh',
    {},
    {
      withCredentials: true,
    },
  );
  return response.data;
};

import { client } from '@/shared';

interface ILoginData {
  login: string;
  password: string;
}

export const loginApi = async (loginData: ILoginData) => {
  return client.post('/login', loginData);
};

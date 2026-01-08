export interface ILoginData {
  login: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  csrfToken: string;
  user?: {};
}

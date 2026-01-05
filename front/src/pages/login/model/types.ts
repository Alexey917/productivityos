export interface ILoginData {
  login: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  csrfToken: string;
  user?: {};
}

export interface IRefreshResponse {
  accessToken: string;
  csrfToken: string;
}

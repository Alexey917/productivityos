import axios, { AxiosError } from 'axios';
import { useSelector } from 'react-redux';
import type { RootState } from '../lib/store';

export const client = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

let isRefreshing = false; // идет ли сейчас обновление токена
let failedQueue: any = []; // Массив (очередь) запросов, которые провалились из-за 401.

// Функция для обработки очереди.
const processQueue = (error: any, token: string | null = null) => {
  failedQueue.array.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axios.interceptors.request.use((config) => {
  const csrfToken = useSelector((state: RootState) => state.auth.csrfToken); // так незя
  if (config.method !== 'GET') {
    config.headers['X-CSRF-Token'] = csrfToken;
  }
  return config;
});

// ловим все ответы от сервера, особенно ошибки.
axios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config; // Сохраняем оригинальный конфиг запроса (URL, метод, данные и т.д.), чтобы повторить его с новым токеном позже

    if (
      error.response?.status === 401 &&
      !originalRequest?.url?.includes('/refresh') &&
      originalRequest
    ) {
      //Если уже идет обновление токена, ставим запрос в очередь.
      if (isRefreshing) {
        return new Promise((resolve, rejected) => {
          failedQueue.push({ resolve, rejected });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`; // обновляем заголовок
            }
            return axios(originalRequest); // повторяем оригинальный запрос
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true; // чтобы не обрабатывать этот запрос повторно
      isRefreshing = true; // другие запросы будут попадать в очередь

      try {
        const { accessToken, csrfToken } = await client.post<{
          accessToken: string;
          csrfToken: string;
        }>(
          '/refresh',
          {},
          {
            withCredentials: true,
          },
        );

        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;

        processQueue(null, accessToken); // Все запросы в failedQueue получают новый токен и выполняются.

        // Обновляем заголовок и повторяем оригинальный запрос.
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }
        return axios(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  },
);

export const updateAuthHeader = (token: string | null) => {
  if (token) {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    client.defaults.headers.common['Authorization'];
  }
};

const token = localStorage.getItem('accessToken');

if (token) updateAuthHeader(token);

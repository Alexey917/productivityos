import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { refreshToken } from './endpoints/refresh';

declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}

interface IFailedQueueItem {
  resolve: (token: string) => void;
  reject: (reason: AxiosError | Error) => void;
}

export const client = axios.create({
  baseURL: import.meta.env.BASE_URL,
  withCredentials: true,
});

let isRefreshing = false; // идет ли сейчас обновление токена
let failedQueue: Array<IFailedQueueItem> = []; // Массив (очередь) запросов, которые провалились из-за 401.

// Функция для обработки очереди.
const processQueue = (
  error: AxiosError | Error | null = null,
  token: string | null = null,
) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token!);
    }
  });
  failedQueue = [];
};

client.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (config.method && !['get', 'GET'].includes(config.method.toLowerCase())) {
    const csrfToken = localStorage.getItem('csrfToken');
    if (csrfToken && config.headers) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }
  }
  return config;
});

// ловим все ответы от сервера, особенно ошибки.
client.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig; // Сохраняем оригинальный конфиг запроса (URL, метод, данные и т.д.), чтобы повторить его с новым токеном позже

    if (
      error.response?.status === 401 &&
      !originalRequest?.url?.includes('/refresh') &&
      originalRequest
    ) {
      //Если уже идет обновление токена, ставим запрос в очередь.
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`; // обновляем заголовок
            }
            return client(originalRequest); // повторяем оригинальный запрос
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true; // чтобы не обрабатывать этот запрос повторно
      isRefreshing = true; // другие запросы будут попадать в очередь

      try {
        const { accessToken, csrfToken } = await refreshToken();

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('csrfToken', csrfToken);

        client.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;

        processQueue(null, accessToken); // Все запросы в failedQueue получают новый токен и выполняются.

        // Обновляем заголовок и повторяем оригинальный запрос.
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }
        return client(originalRequest);
      } catch (refreshError: unknown) {
        // Если refresh провалился.

        let errorToQueue: AxiosError;

        if (refreshError instanceof AxiosError) {
          errorToQueue = refreshError;
        } else if (refreshError instanceof Error) {
          errorToQueue = new AxiosError(
            refreshError.message,
            'REFRESH_FAILED',
            originalRequest,
            undefined,
            undefined,
          );
        } else {
          errorToQueue = new AxiosError(
            'Refresh token failed',
            'REFRESH_FAILED',
            originalRequest,
            undefined,
            undefined,
          );
        }

        processQueue(errorToQueue, null); // все запросы в очереди получают ошибку
        localStorage.removeItem('accessToken');
        window.location.href = '/login'; //  пользователь должен залогиниться заново
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false; // Всегда сбрасываем флаг, даже если была ошибка. Чтобы новые запросы могли снова инициировать refresh при необходимости.
      }
    }
    return Promise.reject(error); // Если это не 401 или другая ошибка — просто прокидываем дальше.
  },
);

const initAuth = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

// Запускаем инициализацию
initAuth();

export const updateAuthHeader = (token: string | null) => {
  if (token) {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('accessToken', token);
  } else {
    delete client.defaults.headers.common['Authorization'];
    localStorage.removeItem('accessToken');
  }
};

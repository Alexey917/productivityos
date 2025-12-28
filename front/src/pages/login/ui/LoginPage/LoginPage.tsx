import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { FormButton, InputAnim, Logo, REGEX } from '@/shared';
import { loginApi } from '../../api/login';
import axios from 'axios';

import classes from './LoginPage.module.css';

interface ILoginForm {
  login: string;
  password: string;
}

export const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { isValid },
  } = useForm<ILoginForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: ILoginForm) => {
    // setLoading(true);
    // try {
    //   const response = await loginApi(data);
    //   localStorage.setItem('token', response?.data.token);
    //   axios.interceptors.request.use((config) => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //       config.headers.Authorization = `Bear ${token}`;
    //     }
    //     return config;
    //   });
    // } catch (e) {
    //   console.log(e);
    //   setError('Неверный логин/пароль');
    //   setError('Ошибка сети');
    // }
    // setLoading(false);
  };

  return (
    <main className={classes.login}>
      <div className={classes.wrapper}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Logo />
          <Controller
            name="login"
            control={control}
            rules={{
              required: 'Обязательное поле',
              minLength: { value: 3, message: 'Не менее 3 символов' },
              maxLength: { value: 20, message: 'Не более 20 символов' },
              pattern: {
                value: REGEX.LOGIN_BASE,
                message: 'недопустимые символы',
              },
              validate: {
                firstSymbol: (value) =>
                  REGEX.LOGIN_START.test(value) ||
                  'Не начинается с цифр и символов',

                lastSymbol: (value) =>
                  REGEX.LOGIN_END.test(value) || 'Не заканчивается .-_ ',

                moreTwoSymbols: (value) =>
                  REGEX.LOGIN_NO_DOUBLE.test(value) ||
                  'Несколько спец.символов подряд',
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <InputAnim
                  {...field}
                  placeholder="Логин"
                  type="text"
                  aria-describedby={`login-error-${field.name}`}
                  aria-invalid={fieldState.error ? 'true' : 'false'}
                  aria-required="true"
                />
                {fieldState.error && (
                  <span
                    className={classes.error}
                    id={`login-error-${field.name}`}
                    role="alert"
                  >
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Обязательное поле',
              minLength: { value: 12, message: 'не менее 12 символов' },
              maxLength: { value: 64, message: 'не более 64 символов' },
              pattern: {
                value: REGEX.PASSWORD_ALLOWED_CHARS,
                message: 'недопустимые символы',
              },
              validate: {
                noUppercase: (value) =>
                  REGEX.HAS_UPPERCASE.test(value) || 'нет заглавных букв',

                noLowercase: (value) =>
                  REGEX.HAS_LOWERCASE.test(value) || 'нет строчных букв',

                noNumbers: (value) =>
                  REGEX.HAS_NUMBER.test(value) || 'нет цифр',

                noSpecialSymbols: (value) =>
                  REGEX.HAS_SPECIAL_CHAR.test(value) ||
                  'нет специальных символов',

                hasSequence: (value) =>
                  !REGEX.NO_THREE_SEQUENTIAL.test(value) ||
                  'последовательность одного символа',

                personalInfo: (value) => {
                  const loginValue = getValues('login');
                  return value !== loginValue || 'не используйте логин';
                },
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <InputAnim
                  {...field}
                  placeholder="Пароль"
                  type="password"
                  aria-describedby={`login-error-${field.name}`}
                  aria-invalid={fieldState.error ? 'true' : 'false'}
                  aria-required="true"
                />
                {fieldState.error && (
                  <span
                    className={classes.error}
                    id={`login-error-${field.name}`}
                    role="alert"
                  >
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
          {error && <span className={classes.error}>{error}</span>}
          <div className={classes.linkWrapper}>
            <Link to="registration" className={classes.link}>
              Регистрация
            </Link>
            <Link to="#" className={classes.link}>
              Забыли пароль?
            </Link>
          </div>
          <FormButton
            text="Войти"
            disabled={!isValid ? true : false}
            aria-describedby={!isValid ? 'form-errors' : undefined}
          />
          {/* {loading ? (
            <div>Вход...</div>
          ) : (
            <div className={classes.linkWrapper}>
              <Link to="registration" className={classes.link}>
                Регистрация
              </Link>
              <Link to="#" className={classes.link}>
                Забыли пароль?
              </Link>
            </div>
            <FormButton
              text="Войти"
              disabled={!isValid ? true : false}
              aria-describedby={!isValid ? 'form-errors' : undefined}
            />
          )} */}
        </form>
      </div>
    </main>
  );
};

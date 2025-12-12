import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { FormButton, InputAnim, Logo } from '@/shared';
import classes from './LoginPage.module.css';

interface ILoginForm {
  login: string;
  password: string;
}

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ILoginForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className={classes.login}>
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
                value: /^[a-zA-Z0-9._-]+$/,
                message: 'недопустимые символы',
              },
              validate: {
                firstSymbol: (value) =>
                  /^[a-zA-Z][a-zA-Z0-9._-]+$/.test(value) ||
                  'Не начинается с цифр и символов',

                lastSymbol: (value) =>
                  /^[a-zA-Z0-9._-]+[a-zA-Z0-9]$/.test(value) ||
                  'Не заканчивается .-_ ',

                moreTwoSymbols: (value) =>
                  /^(?!.*(\.\.|--|__))/.test(value) ||
                  'Несколько спец.символов подряд',
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <InputAnim {...field} placeholder="Логин" />
                {fieldState.error && (
                  <span className={classes.error}>
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
          <InputAnim placeholder="Пароль" />
          <div className={classes.linkWrapper}>
            <Link to="registration" className={classes.link}>
              Регистрация
            </Link>
            <Link to="#" className={classes.link}>
              Забыли пароль?
            </Link>
          </div>
          <FormButton text="Войти" disabled={!isValid ? true : false} />
        </form>
      </div>
    </div>
  );
};

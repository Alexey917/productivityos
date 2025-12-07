import { FormButton, InputAnim, Logo } from '@/shared';
import classes from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <div className={classes.login}>
      <div className={classes.wrapper}>
        <form action="" className={classes.form}>
          <Logo />
          <InputAnim placeholder="Логин" />
          <InputAnim placeholder="Пароль" />
          <FormButton text="Войти" />
        </form>
      </div>
    </div>
  );
};

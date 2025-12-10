import { Link } from 'react-router-dom';
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
          <div className={classes.linkWrapper}>
            <Link to="registration" className={classes.link}>
              Регистрация
            </Link>
            <Link to="#" className={classes.link}>
              Забыли пароль?
            </Link>
          </div>
          <FormButton text="Войти" />
        </form>
      </div>
    </div>
  );
};

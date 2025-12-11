import { Link } from 'react-router-dom';
import { FormButton, InputAnim, Logo } from '@/shared';

import classes from './RegisterPage.module.css';

export const RegisterPage = () => {
  return (
    <div className={classes.registration}>
      <div className={classes.wrapper}>
        <form action="" className={classes.form}>
          <Logo />
          <InputAnim placeholder="Почта" />
          <InputAnim placeholder="Логин" />
          <InputAnim placeholder="Пароль" />
          <InputAnim placeholder="Повторить пароль" />
          <FormButton text="Зарегистрироваться" />
          <div className={classes.linkWrapper}>
            <Link to="/" className={classes.link}>
              Вернуться главную
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

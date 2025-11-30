import { InputAnim, InputRadio } from '@/shared';
import classes from './CreateSphere.module.css';

export const CreateSphere = () => {
  return (
    <div className={classes.content}>
      <form className={classes.form} action="#">
        <legend className={classes.legend}>Новая сфера</legend>
        <InputAnim placeholder="Название" />
        <div className={classes.radioGroup}>
          <InputRadio text="Спринт" />
          <InputRadio text="Поддержка" />
        </div>
      </form>
    </div>
  );
};

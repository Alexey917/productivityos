import classes from './CreateButton.module.css';
import plus from '../../assets/sprite.svg';

export const CreateButton = () => {
  return (
    <button type="button" className={classes.btn}>
      <div className={classes.topLine}></div>
      <div className={classes.rightLine}></div>
      <div className={classes.bottomLine}></div>
      <div className={classes.leftLine}></div>
      <svg className={`${classes.icon}`}>
        <use href={plus + '#plus'}></use>
      </svg>
      <span className={classes.text}>Добавить сферу</span>
    </button>
  );
};

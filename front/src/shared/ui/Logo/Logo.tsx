import classes from './Logo.module.css';

export const Logo = () => {
  return (
    <h2 className={classes.logo}>
      <span className={classes.text}>ProductivityOS</span>
    </h2>
  );
};

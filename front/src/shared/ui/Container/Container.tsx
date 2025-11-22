import type { ReactNode, FC } from 'react';
import classes from './Container.module.css';

interface IContainer {
  title: string;
  children: ReactNode;
}

export const Container: FC<IContainer> = ({ title, children }) => {
  return (
    <main className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      {children}
    </main>
  );
};

import { Sidebar } from '@/widgets';

import classes from './SpherePage.module.css';
import { Container, CreateButton } from '@/shared';

export const SpherePage = () => {
  return (
    <div className={classes.sphere}>
      <Sidebar />
      <Container title="Сферы">
        <CreateButton />
      </Container>
    </div>
  );
};

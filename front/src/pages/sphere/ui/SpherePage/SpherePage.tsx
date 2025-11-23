import { Sidebar } from '@/widgets';
import { useToggleModal, CreateSphere } from '@/features';
import { Container, CreateButton, Modal } from '@/shared';

import classes from './SpherePage.module.css';

export const SpherePage = () => {
  const { openModel, toggleModal } = useToggleModal();

  return (
    <div className={classes.sphere}>
      <Sidebar />
      <Container title="Сферы">
        <CreateButton toggleModal={toggleModal} />
        {openModel && (
          <Modal>
            <CreateSphere />
          </Modal>
        )}
      </Container>
    </div>
  );
};

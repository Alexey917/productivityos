import { useEffect, useRef, useState, type FC, type ReactNode } from 'react';
import classes from './Modal.module.css';

interface IModal {
  children: ReactNode;
  toggleModal: () => void;
  openModel: boolean;
}

export const Modal: FC<IModal> = ({ children, openModel, toggleModal }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOverlay = (e: MouseEvent) => {
      if (e.target === overlayRef.current) {
        toggleModal();
      }
    };

    document.addEventListener('click', handleOverlay);

    return () => {
      document.removeEventListener('click', handleOverlay);
    };
  }, [openModel]);

  return (
    <div className={classes.modal}>
      <div className={classes.overlay} ref={overlayRef}>
        {children}
      </div>
    </div>
  );
};

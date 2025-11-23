import { useState } from 'react';

export const useToggleModal = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenModel(!openModel);
  };

  return { openModel, toggleModal };
};

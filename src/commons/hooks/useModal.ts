import { modalState } from '@/atoms/atom';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

const useModal = () => {
  const [, setModal] = useRecoilState(modalState);

  const openModal = (popup: ReactNode) => setModal(popup);
  const closeModal = () => setModal(null);

  return { openModal, closeModal };
};

export default useModal;
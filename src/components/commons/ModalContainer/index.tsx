'use client';

import { useRecoilValue } from 'recoil';
import { MouseEventHandler } from 'react';
import { modalState } from '@/atoms/atom';
import BackDrop from '../backgrounds/BackDrop';
import useModal from '@/commons/hooks/useModal';
import { AnimatePresence } from 'framer-motion';

const ModalContainer = () => {
  const modal = useRecoilValue(modalState);
  const { closeModal } = useModal();

  const modalVisible = !!modal;

  const handleClick: MouseEventHandler<HTMLDivElement> = ({ target, currentTarget }) => {
    if (target === currentTarget) closeModal();
  };

  return (
    <AnimatePresence>
      {modalVisible && (
        <BackDrop className="items-end" isVisible={modalVisible} onClick={handleClick}>
          {modal}
        </BackDrop>
      )}
    </AnimatePresence>
  );
};

export default ModalContainer;
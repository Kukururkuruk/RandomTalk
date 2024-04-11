import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { closeContentModal } from '../../redux/slices/modalSlice';

function ErrorModal(): JSX.Element {
  const modal = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const closeModal = (): void => {
    dispatch(closeContentModal());
  };

  return (
    <Modal isOpen={modal.show} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modal.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modal.content}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={closeModal}>
            Ясно, понятно
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ErrorModal;

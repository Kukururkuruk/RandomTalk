import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from '@chakra-ui/react';
import { PointType } from '../../types/PointType';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { updateClientPointThunk, updateStatusPointThunk } from '../../redux/thunkActions/updatePointThunk';

type StudentItemProps = {
  point: PointType;
  index: number;
};

export default function DismissItem({ point, index }: StudentItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState('');

  const userID = useAppSelector((state) => (state.auth.user.status === 'logged' ? state.auth.user.id : ''));

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setReason('');
  };

  const handleConfirm = () => {
    dispatch(updateStatusPointThunk(point.id));
    dispatch(updateClientPointThunk({ id: point.id, clientId: userID, reason }));
    setIsModalOpen(false);
    setReason('');
  };

  return (
    <>
    <Box display={point.visibility===false ? "none" : "block"}>
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        rounded="md"
        alignItems="center"
        transition="all .3s ease"
        _hover={{
          backgroundColor: useColorModeValue('gray.100', 'gray.600'),
        }}
      >
        <Text>{index + 1}</Text>
        <Text>{point.theme}</Text>
        <Button colorScheme="whatsapp" onClick={handleButtonClick}>
          Отправить
        </Button>
      </Box>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent width={700}>
          <ModalHeader>Введите свою внешность, через сколько будете и т.д.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Введите вашу информацию"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              height={150}
              required
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleConfirm}>
              Подтвердить
            </Button>
            <Button variant="ghost" onClick={handleCloseModal}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    </>
  );
}

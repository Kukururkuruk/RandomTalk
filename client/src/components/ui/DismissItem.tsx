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
import type { PointType } from '../../types/PointType';
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
  <Box display="flex" flexDirection="column">
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      rounded="md"
      alignItems="center"
      transition="all .3s ease"
      _hover={{
        backgroundColor: useColorModeValue('#FDA065', 'gray.600'),
      }}
    >
<Text
  color="#AD574A"
  fontWeight="bold"
  _hover={{ color: "#FDA065" }}
>
  {point.theme}
</Text>

      <Button
  color="#FDA065"
  onClick={handleButtonClick}
  bg="#4F535E"
  _hover={{ bg: "#4F535E" }}
>
  Отправить
</Button>
    </Box>
    <Box p={2} rounded="md" boxShadow="md" mt={2} />
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
        />
      </ModalBody>
      <ModalFooter>
        <Button color="#FDA065" mr={3} onClick={handleConfirm}>
          Подтвердить
        </Button>
        <Button variant="ghost" onClick={handleCloseModal}>
          Закрыть
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
</>

  );
}

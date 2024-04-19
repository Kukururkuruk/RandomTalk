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

  const backgroundColor = useColorModeValue('#FDA065', 'gray.600');
  const hoverBackgroundColor = useColorModeValue('#878A92', 'gray.600');

  return (
    <Box display={point.visibility === false ? "none" : "flex"} flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-between"
          p={2}
          rounded="md"
          alignItems="center"
          transition="all .3s ease"
          _hover={{
            backgroundColor: hoverBackgroundColor,
          }}
        >
          <Text
            color="#FDA065"
            fontWeight="bold"
            _hover={{ color: backgroundColor }}
          >
            {index + 1}. {point.theme}
          </Text>

          <Button
            colorScheme="whatsapp"
            onClick={handleButtonClick}
            bg="#4F535E"
            _hover={{ bg: "#4F535E" }}
          >
            Отправить
          </Button>
        </Box>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
  <ModalOverlay />
  <ModalContent width={700} bg="#4F535E" color="#FDA065">
    <ModalHeader>Введите свою внешность, через сколько будете и т.д.</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Input
        placeholder="Введите вашу информацию"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        height={150}
        required
        color="#FDA065"
      />
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="orange" mr={3} onClick={handleConfirm}>
        Подтвердить
      </Button>
      <Button variant="ghost" color="#FDA065" onClick={handleCloseModal}>
        Закрыть
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>

      </Box>
  );
}

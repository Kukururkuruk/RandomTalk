import React from 'react';
import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { PointType } from '../../types/PointType';
; // Импортируем тип UserType
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import updateStatusPointThunk from '../../redux/thunkActions/updatePointThunk';
import { createAccessThunk } from '../../redux/thunkActions/accessThunk';
import { UserType } from '../../types/authType';

type StudentItemProps = {
  point: PointType;
  index: number;
};

export default function DismissItem({ point, index }: StudentItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.auth.user); // Получаем стейт пользователя

  // Извлекаем UserType из UserStateType
  let userType: UserType | undefined;
  if (userState.status === 'logged') {
    userType = userState;
  }

  const handleButtonClick = () => {
    dispatch(updateStatusPointThunk(point.id));
    dispatch(createAccessThunk({ pointId: point.id, status: false, clientId: userType.id }));
  };

  return (
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
      <Button colorScheme='whatsapp' onClick={handleButtonClick}>Отправить</Button>
    </Box>
  );
}

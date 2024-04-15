import React from 'react';
import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { PointType } from '../../types/PointType';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import updateStatusPointThunk from '../../redux/thunkActions/updatePointThunk';
import { createAccessThunk } from '../../redux/thunkActions/accessThunk';

type StudentItemProps = {
  point: PointType;
  index: number;
};

export default function DismissItem({ point, index }: StudentItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const userID = useAppSelector((state) => state.auth.user.status === "logged" ? state.auth.user.id : '')

  const handleButtonClick = () => {
    dispatch(updateStatusPointThunk(point.id));
    dispatch(createAccessThunk({ pointId: point.id, status: false, clientId: userID }));
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

import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import DismissItem from '../ui/DismissItem';
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction';
import Map from '../ui/Map';

export default function MapPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const points = useAppSelector((state) => state.point.points);
  const userID = useAppSelector((state) => state.auth.user.status === 'logged' ? state.auth.user.id : '')

  useEffect(() => {
    void dispatch(getPointsThunk());
  }, []);

  return (
    <Flex justify="center">
      <Box bg={useColorModeValue('', 'gray.900')} w="lg" p={8} borderRadius="md">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          align="center"
          mb={4}
          color={useColorModeValue('gray.900', 'gray.100')}
        >
          Dismiss
        </Text>
        <Box mt={3} p={4} maxH="400px"> 
          {points?.map((point, index) => (
            <DismissItem key={point.id} index={index} point={point} />
          ))}
        </Box>
      </Box>
      <Box>
      <Map points={points.filter(point => point.agreed && point.clientId === userID)} />
</Box>


    </Flex>
  );
}

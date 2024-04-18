import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import DismissItem from '../ui/DismissItem';
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction';
import MyMap from '../ui/Map';
import { getBansThunk } from '../../redux/thunkActions/addPointThunk';

export default function MapPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const points = useAppSelector((state) => state.point.points);
  const bans = useAppSelector((store) => store.point.bans);
  const userID = useAppSelector((state) => state.auth.user.status === 'logged' ? state.auth.user.id : '')

  useEffect(() => {
    void dispatch(getPointsThunk());
    void dispatch(getBansThunk());
  }, []);

  const filteredPoints = points.filter(
    (point) => !bans.some((ban) => ban.pointId === point.id && ban.userId === userID)
  );

  return (
<Flex justify="center" mt="100px">
  <Box bg={useColorModeValue('gray.100', 'gray.900')} w="lg" p={8} borderRadius="md" bg="#4F535E">
    <Text
      fontSize="3xl"
      fontWeight="bold"
      align="center"
      mb={4}
      color={useColorModeValue('#FDA065', '')}
    >
      Events
    </Text>
    <Box mt={3} p={4} maxH="400px"> 
      {filteredPoints?.map((point, index) => (
        <DismissItem key={point.id} index={index} point={point} />
      ))}
    </Box>
  </Box>
  <Box width="1080px" height="600px" ml="50px">
    <MyMap/>
  </Box>
</Flex>
  );
}
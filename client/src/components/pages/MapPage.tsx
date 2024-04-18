import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import DismissItem from '../ui/DismissItem';
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction';
import MyMap from '../ui/Map';
import { getBansThunk } from '../../redux/thunkActions/addPointThunk';

export default function MapPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const points = useAppSelector((state) => state.point.points);
  const bans = useAppSelector((store) => store.point.bans);
  const userID = useAppSelector((state) => state.auth.user.status === 'logged' ? state.auth.user.id : '');
  const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    void dispatch(getPointsThunk());
    void dispatch(getBansThunk());

    const intervalId = setInterval(() => {
      void dispatch(getPointsThunk());
      void dispatch(getBansThunk());
      checkNotifications();
    }, 3000);

    setRefreshInterval(intervalId);

    return () => {
      if (refreshInterval) clearInterval(refreshInterval);
    };
  }, []);

  const filteredPoints = points.filter(
    (point) => !bans.some((ban) => ban.pointId === point.id && ban.userId === userID) && point.agreed === false
  );

  const checkNotifications = () => {

    if (filteredPoints.length > 0) {
      toast.info(`You have ${filteredPoints.length} new dismiss points!`);
    }
  };

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
          {filteredPoints?.map((point, index) => (
            <DismissItem key={point.id} index={index} point={point} />
          ))}
        </Box>
      </Box>
      <Box>
        <MyMap />
      </Box>
    </Flex>
  );
}

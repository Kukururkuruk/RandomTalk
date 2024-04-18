import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import DismissItem from '../ui/DismissItem';
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction';
import MyMap from '../ui/Map';
import { getBansThunk } from '../../redux/thunkActions/addPointThunk';
import { toast } from 'react-toastify';

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
    }, 2000);

    setRefreshInterval(intervalId);

    return () => {
      if (refreshInterval) clearInterval(refreshInterval);
    };
  }, []);

  const filteredPoints = points.filter(
    (point) => !bans.some((ban) => ban.pointId === point.id && ban.userId === userID) && point.agreed === false && point.userId !== userID
  );

  const checkNotifications = () => {
    if (filteredPoints.length > 0) {
      toast.info(`You have ${filteredPoints.length} new dismiss points!`);
    }
  };

  return (
    <Flex justify="center">
      <Box bg={useColorModeValue('gray.100', 'gray.900')} w="lg" p={8} borderRadius="md">
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
        <MyMap />
      </Box>
    </Flex>
  );
}

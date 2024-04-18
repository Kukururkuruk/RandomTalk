import React from 'react';
import { Box, Flex, Text, Badge} from '@chakra-ui/react';
import { PointType } from '../../types/PointType';
import { UserStateType } from '../../types/authType';
import { HistoryType } from '../../types/historyType';
import { useAppSelector } from '../../hooks/useReduxHook';

type HistoryCardProps = {
    history: HistoryType;
    point: PointType;
    user: UserStateType;
  };

const HistoryCard = ({ history, point, user } : HistoryCardProps) => {
    const userID = useAppSelector((state) => state.auth.user.status === 'logged' ? state.auth.user.id : '')
    const theme = point.id === history.pointId ? point.theme : ''
    const author = point.userId === userID ? (user.status === "logged" ? user.username : '') : useAppSelector((state) => state.client.username)
    const client = point.clientId === history.clientId ? useAppSelector((state) => state.client.username) : (user.status === "logged" ? user.username : '')
    
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      mb="4"
      boxShadow="md"
    >
      <Text fontSize="xl" fontWeight="semibold" mb="2">
        Тема разговора: {theme}
      </Text>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Text>{author}</Text>
          <Text>{client}</Text>
        </Flex>
        <Badge colorScheme="green">{}</Badge>
      </Flex>
    </Box>
  );
};

export default HistoryCard;

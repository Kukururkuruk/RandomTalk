import React, { useState } from 'react';
import { Box, Flex, Text, Badge } from '@chakra-ui/react';
import type { PointType } from '../../types/PointType';
import type { UserStateType } from '../../types/authType';
import type { HistoryType } from '../../types/historyType';
import { useAppSelector } from '../../hooks/useReduxHook';
import { Rating } from 'react-simple-star-rating'

type HistoryCardProps = {
  history: HistoryType;
  point: PointType;
  user: UserStateType;
};

function HistoryCard({ history, point, user }: HistoryCardProps) {
  const [ratingValue, setRatingValue] = useState(0)
  const theme = point.id === history.pointId ? point.theme : '';
  const author =
    point.userId === history.userId ? (user.status === 'logged' ? user.username : '') : '';
  const client =
    point.clientId === history.clientId ? useAppSelector((state) => state.client.username) : '';

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" mb="4" boxShadow="md">
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
}

export default HistoryCard;

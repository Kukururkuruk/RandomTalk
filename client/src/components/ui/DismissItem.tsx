import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { PointType } from '../../types/PointType';

type StudentItemProps = {
  point: PointType;
  index: number;
};

export default function DismissItem({ point, index }: StudentItemProps): JSX.Element {

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
    </Box>
  );
}

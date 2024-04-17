import React from 'react';
import { Box, Flex, Text, Stack, Heading, Button } from '@chakra-ui/react';
import cat from '../../../public/Designer.jpeg'; // Assuming Designer.jpeg is your cat image

export default function MainPage(): JSX.Element {
  return (
    <Flex justifyContent="center" alignItems="center" gap={4}>
      <Box>
        <Box w="300px" h="300px" overflow="hidden">
          <img src={cat} alt="Котик бариста" style={{ objectFit: 'cover' }} />
        </Box>
      </Box>
      <Box>
        <Heading fontSize="2xl">Аниме-кот бариста</Heading>
        <Stack spacing={4} overflow="hidden" bg="white" borderRadius="lg" px={4} py={6}>
          <Text fontSize="xl">Здравствуй пирожочек!</Text>
          <Text fontSize="xl">Рад тебя видеть</Text>
          <Text fontSize="xl">Заходи присаживайся или</Text>
          <Text fontSize="xl">ты хочешь поискать с кем поговорить? <Text className="cursor" blinkAnimation={{ animation: 'blink 1s infinite ease-in-out' }}>|</Text></Text>
        </Stack>
        <Flex gap={2} mt={4}>
          <Button variant="solid" colorScheme="blue">
            Посидеть
          </Button>
          <Button variant="outline">Поискать</Button>
        </Flex>
      </Box>
    </Flex>
  );
}

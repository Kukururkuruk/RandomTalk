import React from 'react';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import cat from '../../../public/Designer.jpeg'; // Assuming Designer.jpeg is your cat image
import { Link } from 'react-router-dom';

export default function MainPage(): JSX.Element {
  return (
    <Flex justifyContent="center" alignItems="center" gap={4}>
      <Box>
        <Box w="300px" h="300px" overflow="hidden">
          <img src={cat} alt="Котик бариста" style={{ objectFit: 'cover' }} />
        </Box>
      </Box>
      <Box>
        <Heading fontSize="2xl">Бариста Кот: Ток Рандомич</Heading>

        <div className="bubble grow left">
          <Text className="p" fontSize="xl">
            Здравствуй пирожочек!
          </Text>
          <Text className="p" fontSize="xl">
            Рад тебя видеть
          </Text>
          <Text className="p" fontSize="xl">
            Заходи присаживайся или
          </Text>
          <Text className="p" fontSize="xl">
            ты хочешь поискать с кем поговорить?{' '}
          </Text>
        </div>
        <Flex gap={2} mt={4}>
          <div className="container">
            <Link to='/addpoint'><button className="btn">Посидеть</button></Link>
            
          </div>
          <div className="container">
          <Link to='/mappage'><button className="btn">Поискать</button></Link>
            
          </div>
        </Flex>
      </Box>
    </Flex>
  );
}

import React from 'react';
import { Box, Flex, Text, Heading, Center } from '@chakra-ui/react';
import cat from '../../../public/Designer.jpeg'; // Assuming Designer.jpeg is your cat image
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useReduxHook';

export default function MainPage(): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <Flex justifyContent="center" alignItems="center" gap={4} marginTop="100px">
      <Box>
        <Box w="300px" h="300px" overflow="hidden" borderRadius="md">
          <img src={cat} alt="Котик бариста" style={{ objectFit: 'cover' }} />
        </Box>
      </Box>
      <Box marginTop="10px" bg="#4F535E" borderRadius="md" p={4}>
        <Heading fontSize="2xl" textColor="#FDA065">Бариста Кот: Ток Рандомич</Heading>
      {user.status === 'logged' ?(<Box>


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
        <Flex justifyContent="center" gap={4} mt={4}>
          <div className="container">
            <Link to='/addpoint'><button className="btn">Посидеть</button></Link>
            
          </div>
          <div className="container">
          <Link to='/mappage'><button className="btn">Поискать</button></Link>
            
          </div>
        </Flex>

        
      </Box>):
      (<Box>
        <Heading fontSize="2xl">Бариста Кот: Ток Рандомич</Heading>

        <div className="bubble grow left">
          <Text className="p" fontSize="xl">
            Здравствуй пирожочек!
          </Text>
          <Text className="p" fontSize="xl">
            Рад тебя видеть
          </Text>
          <Text className="p" fontSize="xl">
            для начала давай
          </Text>
          <Text className="p" fontSize="xl">
            зарегестрируйся или залогинься.{' '}
          </Text>
        </div>
        <Flex justifyContent="center" gap={4} mt={4}>
          <div className="container">
            <Link to='/signin'><button className="btn">Логин</button></Link>
            
          </div>
          <div className="container">
          <Link to='/signup'><button className="btn">Регист-ия</button></Link>
            
          </div>
        </Flex>

        
      </Box>)}
    </Flex>
  );
}

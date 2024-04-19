import React from 'react';
import { Container, Box, Text, Flex, VStack, Link, Image } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
import ErrorModal from './ui/ErrorModal';
import city from '../../public/city-color.png';

export default function Root(): JSX.Element {
  return (
    <Container maxW="container.xl" minH="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Box >
        <NavBar />
        <Outlet />
      </Box>
      <ErrorModal />
      <Box>
      <Image src={city} />
      <Box as="footer" width="full" bg="#4F535E" p={3} borderTopRadius="0">
        <Flex justify="center" align="center">
          <VStack>
            <Text color="#D4C6A9">&copy; {new Date().getFullYear()} RandomTalk. All rights reserved.</Text>
            <Flex gap={4}>
              <Link href="#" isExternal color="#FDA065">Команда</Link>
              <Link href="#" isExternal color="#FDA065">Стак технологий</Link>
              <Link href="https://forms.gle/woeYuwUvGLTAa4kq9" isExternal color="#FDA065">Поддержка</Link>
            </Flex>
          </VStack>
        </Flex>
      </Box>
      </Box>
    </Container>
  );
}

import React from 'react';
import { Container, Box, Text, Flex, VStack, Link } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
import ErrorModal from './ui/ErrorModal';

export default function Root(): JSX.Element {
  return (
    <Container maxW="container.xl" minH="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Box>
        <NavBar />
        <Outlet />
      </Box>
      <ErrorModal />
      <Box as="footer" width="full" bg="#4F535E" p={3} borderTopRadius="lg">
        <Flex justify="center" align="center">
          <VStack>
            <Text color="#D4C6A9">&copy; {new Date().getFullYear()} RandomTalk. All rights reserved.</Text>
            <Flex gap={4}>
              <Link href="https://forms.gle/CPApS28ui8SVCo9Z8" isExternal color="#FDA065">Тех. Поддержка</Link>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
}

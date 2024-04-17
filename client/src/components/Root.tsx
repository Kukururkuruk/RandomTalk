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
      <Box as="footer" width="full" bg="gray.200" p={4}>
        <Flex justify="center" align="center">
          <VStack>
            <Text>&copy; {new Date().getFullYear()} Your Site Name. All rights reserved.</Text>
            <Flex gap={4}>
              <Link href="#" isExternal>Privacy Policy</Link>
              <Link href="#" isExternal>Terms of Service</Link>
              <Link href="#" isExternal>Contact Us</Link>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
}

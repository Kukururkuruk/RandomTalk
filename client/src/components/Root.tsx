import React from 'react';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
import ErrorModal from './ui/ErrorModal';

export default function Root(): JSX.Element {
  return (
    <Container maxW="container.xl">
      <NavBar />
      <Outlet />
      <ErrorModal />
    </Container>
  );
}

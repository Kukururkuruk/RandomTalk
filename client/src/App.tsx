import React, { useEffect } from 'react';
import { NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Box, Center, Heading, Text } from '@chakra-ui/react';
import MainPage from './components/pages/MainPage';
import Root from './components/Root';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import { checkTokenThunk } from './redux/thunkActions/authThunkActions';
import { useAppDispatch, useAppSelector } from './hooks/useReduxHook';
import PrivateRouter from './components/HOCs/PrivateRouter';
import LoaderProvider from './components/HOCs/LoaderProvider';
import MapPage from './components/pages/MapPage';
import UserPage from './components/pages/UserPage';
import MapPage2 from './components/pages/MapPage2';
import PageNotFound from './components/pages/PageNotFound';
import AddPointPage from './components/pages/AddPointPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector((store) => store.auth.user.status);

  useEffect(() => {
    void dispatch(checkTokenThunk());
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <LoaderProvider isLoading={status === 'pending'}>
          <Root />
        </LoaderProvider>
      ),
      errorElement: (
        <Center h="100vh">
          <Box textAlign="center">
            <Heading as="h1" size="xl" mb="4">
              404 - Страница не найдена
            </Heading>
            <Text fontSize="lg" color="gray.500">
              Кажется, вы потерялись в просторах интернета...
            </Text>
            <NavLink to="/">Не хотите вернуться на главную? </NavLink>
          </Box>
        </Center>
      ),
      children: [
        { path: '/', element: <MainPage /> },
        {
          path: '/signin',
          element: (
            <PrivateRouter isAllowed={status === 'guest'}>
              <SignInPage />
            </PrivateRouter>
          ),
        },
        {
          path: '/signup',
          element: (
            <PrivateRouter isAllowed={status === 'guest'}>
              <SignUpPage />
            </PrivateRouter>
          ),
        },
        { path: '/mappage', element: <MapPage /> },
        { path: '/mappage2', element: <MapPage2 /> },
        {
          path: '/userpage',
          element: (
            <PrivateRouter isAllowed={status === 'logged'}>
              <UserPage />
            </PrivateRouter>
          ),
        },
        {
          path: '/addpoint',
          element: (
            <PrivateRouter isAllowed={status === 'logged'}>
              <AddPointPage />
            </PrivateRouter>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

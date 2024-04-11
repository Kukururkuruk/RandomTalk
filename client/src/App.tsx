
import React, { useEffect } from 'react';
import { Link, NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Root from './components/Root';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import { checkTokenThunk } from './redux/thunkActions/authThunkActions';
import { useAppDispatch, useAppSelector } from './hooks/useReduxHook';
import PrivateRouter from './components/HOCs/PrivateRouter';
import LoaderProvider from './components/HOCs/LoaderProvider';
import UserPage from './components/pages/UserPage';
import PageNotFound from './components/pages/PageNotFound';
import { Box, Center, Heading, Text } from '@chakra-ui/react';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector((store) => store.auth.user.status)

  useEffect(() => {
    void dispatch(checkTokenThunk());
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <LoaderProvider isLoading={status === 'pending'}>
      <Root />
      </LoaderProvider>,
      errorElement: (
        <>
          <Center h="100vh">
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb="4">
          404 - Страница не найдена
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Кажется, вы потерялись в просторах интернета...
        </Text>
        <NavLink to='/'>Не хотите вернуться на главную? </NavLink>
      </Box>
    </Center>
        </>
      ),
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/signin', element: 
        <PrivateRouter isAllowed={status === 'guest'}>
          <SignInPage /> 
        </PrivateRouter>
        },
        { path: '/signup', element: 
        <PrivateRouter isAllowed={status === 'guest'}>
          <SignUpPage /> 
        </PrivateRouter>
        },
        {
          path: '/userpage', element: 
          <PrivateRouter isAllowed={status === 'logged'}>
            <UserPage />
          </PrivateRouter>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

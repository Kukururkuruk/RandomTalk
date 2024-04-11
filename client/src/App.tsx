
import React, { useEffect } from 'react';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
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
          <h1>Ошибка</h1>
          <Link to="/">На главную</Link>
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
        {path: '/mappage', element: <MapPage />},
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

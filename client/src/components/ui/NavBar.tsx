import { Box, Button, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { logOutThunk } from '../../redux/thunkActions/authThunkActions';

export default function NavBar(): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const logoutHandler = (): void => {
    void dispatch(logOutThunk()).then(navigate('/signin'));
  };
  return (
    <Box bg={useColorModeValue('#4F535E', 'gray.900')} rounded="lg" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={6}>
          <Box color="#FDA065">Hi,</Box>
          <Box color="#FDA065">{user.status === 'logged' ? user.username : 'guest'}</Box>
          <Box color="#D4C6A9">
          <NavLink to="/addpoint" className={({ isActive }) => (isActive ? 'active' : '')}>
            Create
          </NavLink>
          </Box>
          <Box color="#D4C6A9">
          <NavLink to="/mappage" className={({ isActive }) => (isActive ? 'active' : '')}>
            Find
          </NavLink>
          </Box>
          <Box color="#D4C6A9">
          <NavLink to='/userpage' className={({ isActive }) => (isActive ? 'active' : '')}>
            UserPage
          </NavLink>
          </Box>
        </HStack>
        <HStack spacing={6}>
          {user.status !== 'logged' ? (
            <>

          <Box color="#D4C6A9">
              <NavLink to="signin" className={({ isActive }) => (isActive ? 'active' : '')}>
                signin
              </NavLink>
              </Box>
              <Box color="#D4C6A9">
              <NavLink to="signup" className={({ isActive }) => (isActive ? 'active' : '')}>
                signup
              </NavLink>
              </Box>
            </>
          ) : (
            <Button onClick={logoutHandler}>Выйти</Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}

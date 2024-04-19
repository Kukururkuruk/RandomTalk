import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAppDispatch } from '../../hooks/useReduxHook';
import { signInThunk } from '../../redux/thunkActions/authThunkActions';
import type { UserSignInType } from '../../types/authType';
import { openModalWithError } from '../../redux/slices/modalSlice';
import '../../styles/animations.css'; // Resolved conflict: keeping animations import

export default function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserSignInType;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.error('Invalid email format'); // Resolved conflict: logging error message
      dispatch(openModalWithError('Неверный формат email'));
      return;
    }

    void dispatch(signInThunk(formData))
      .unwrap()
      .catch(() => {
        void dispatch(openModalWithError('Ошибка входа! Проверьте данные и повторите попытку'));
      });
  };

  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      className="body-gradient"
      marginTop="-225px"
    >
      <Box bg={useColorModeValue('#4F535E', 'gray.900')} w="lg" p={8} borderRadius="md">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          align="center"
          mb={4}
          color="#FDA065"
        >
          Sign In
        </Text>
        <form onSubmit={submitHandler}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel color={useColorModeValue('#C9B7B7', 'gray.100')}>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                bg={useColorModeValue('C9B7B7', 'gray.900')}
                color="#AD574A"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color={useColorModeValue('#C9B7B7', 'gray.100')}>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                bg={useColorModeValue('C9B7B7', 'gray.900')}
                color="#AD574A"
                required // Resolved conflict: keeping required attribute
              />
            </FormControl>

            <Button type="submit" colorScheme="orange" w="full" mt={4} bgColor="#FDA065">
              Sign in
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

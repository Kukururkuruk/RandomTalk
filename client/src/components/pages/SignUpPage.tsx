import React from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  VStack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { useAppDispatch } from '../../hooks/useReduxHook';
import { signUpThunk } from '../../redux/thunkActions/authThunkActions';
import { openModalWithError } from '../../redux/slices/modalSlice';
import type { UserSignUpType } from '../../types/authType';
import regCat from '../../../public/regCat.jpeg'; // Make sure this path is correct
import '../../../public/cat.css'

export default function SignUpPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserSignUpType;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      dispatch(
        openModalWithError(
          'Ошибка регистрации! Проверьте формат email',
        ),
      );
      return;
    }

    void dispatch(signUpThunk(formData))
      .unwrap()
      .catch(() => {
        void dispatch(openModalWithError('Ошибка регистрации! Проверьте данные и повторите попытку'));
      });
  };

  return (
    <Flex justify="center" align="center" minHeight="100vh" p={12}>
      <Box boxShadow="2xl" rounded="md" overflow="hidden" >
        <Grid
          templateColumns={{ md: "repeat(2, minmax(0, 1fr))" }}
          gap={10}
          background="#4F535E"
          alignItems="center" 
        >
         <GridItem
    display="flex" // Enables flexbox properties for the image container
    justifyContent="center" // Centers the image on the main-axis (horizontally)
    alignItems="center" // Centers the image on the cross-axis (vertically)
  >
<div className="image-container" >
  <Image
    src={regCat}
    alt="A cool cat"
    objectFit="cover"
    width="100%"
    maxWidth="400px"
    paddingLeft="50px"
    display={{ base: 'none', md: 'block' }}
  />
</div>
  </GridItem>
          <Box bg={useColorModeValue('#4F535E', 'gray.900')} p={8}>
            <Text fontSize="2xl" fontWeight="bold" align="center" mb={4} color={useColorModeValue('#FDA065', 'white')}>
              Sign Up
            </Text>
            <form onSubmit={submitHandler}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel color={useColorModeValue('#C9B7B7', 'gray.100')}>Name</FormLabel>
                  <Input
                    placeholder="Name"
                    name="username"
                    bg={useColorModeValue('C9B7B7', 'gray.900')}
                    color="#AD574A" 
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={useColorModeValue('#C9B7B7', 'gray.100')}>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email@Email"
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
                  />
                </FormControl>

                <Button type="submit" colorScheme="orange" w="full" mt={4} bgColor="#FDA065">
                  Create Account
                </Button>
              </VStack>
            </form>
          </Box>
        </Grid>
      </Box>
    </Flex>
  );
}

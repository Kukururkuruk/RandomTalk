import { Box, Button, FormControl, FormLabel, Input, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useReduxHook';
import type { AddFormPointType } from '../../types/PointType';
import { addPointThunk } from '../../redux/thunkActions/addPointThunk';
import { openModalWithError } from '../../redux/slices/modalSlice';

export default function CharacterAddForm({
  initialCoordinates,
  initialGif,
}: {
  initialCoordinates?: [number, number];
  initialGif: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addSubmitHandler = async (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(event.currentTarget),
    ) as unknown as AddFormPointType;

    // Проверка наличия специальных символов в значениях
    // const regex = /[^\w\s]/;
    // for (const key in formData) {
    //   if (Object.prototype.hasOwnProperty.call(formData, key)) {
    //     const value = formData[key];
    //     if (regex.test(value)) {
    //       console.error(`Invalid input for ${key}`);
    //       dispatch(openModalWithError(`Неверные данные для ${key}`));
    //       return;
    //     }
    //   }
    // }

    if (
      !initialCoordinates ||
      !initialCoordinates.length ||
      initialCoordinates.length !== 2 ||
      isNaN(initialCoordinates[0]) ||
      isNaN(initialCoordinates[1])
    ) {
      console.error('Invalid initialCoordinates');
      dispatch(openModalWithError('Поставьте на карте точку встречи!'));
      return;
    }

    const [latitude, longitude] = initialCoordinates;

    if (isNaN(latitude) || latitude < -90 || latitude > 90) {
      console.error('Invalid latitude');
      return;
    }

    if (isNaN(longitude) || longitude < -180 || longitude > 180) {
      console.error('Invalid longitude');
      return;
    }

    const updatedFormData = {
      ...formData,
      longitude,
      latitude,
      img: initialGif || null,
    };

    await dispatch(addPointThunk(updatedFormData as AddFormPointType));
    navigate('/mappage');
    event.currentTarget.reset();
  };

  return (
    <Box width="350px">
      <form onSubmit={addSubmitHandler}>
        <FormControl>
          <FormLabel color="#FDA065">Предложи тему для разговора</FormLabel>
          <Input 
            name="theme" 
            type="text" 
            borderColor="#4F535E"
            bg={useColorModeValue('#878A92', 'gray.900')}
            required 
          />
  
          <FormLabel color="#FDA065">Во что ты одет?</FormLabel>
          <Input 
            name="cloth" 
            type="text" 
            borderColor="#4F535E"
            bg={useColorModeValue('#878A92', 'gray.900')}
            required 
          />
          
        <FormLabel color="#FDA065" display="flex" flexDirection="column">
          <span>Как выглядишь и во</span>
          <span>сколько будешь на месте?</span>
        </FormLabel>
  
          <Button type="submit" color="#4F535E" bg="#FDA065" mt={4}>Add</Button>
        </FormControl>
      </form>
    </Box>
  );
  
}

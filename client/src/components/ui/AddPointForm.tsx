import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch } from '../../hooks/useReduxHook';
import type { AddFormPointType } from '../../types/PointType';
import { addPointThunk } from '../../redux/thunkActions/addPointThunk';
import { useNavigate } from 'react-router-dom';
import { openModalWithError } from '../../redux/slices/modalSlice';

export default function CharacterAddForm({ initialCoordinates, initialGif }: { initialCoordinates?: [number, number], initialGif: string }): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addSubmitHandler = async (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget)) as unknown as AddFormPointType;

    // Проверка наличия специальных символов в значениях
    const regex = /[^\w\s]/;
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        const value = formData[key];
        if (regex.test(value)) {
          console.error(`Invalid input for ${key}`);
          dispatch(openModalWithError(`Неверные данные для ${key}`));
          return;
        }
      }
    }

    if (!initialCoordinates || !initialCoordinates.length || initialCoordinates.length !== 2 || isNaN(initialCoordinates[0]) || isNaN(initialCoordinates[1])) {
      console.error('Invalid initialCoordinates');
      dispatch(
        openModalWithError(
          'Поставьте на карте точку встречи!',
        ),
      );
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
      img: initialGif ? initialGif : null,
    };

    await dispatch(addPointThunk(updatedFormData as AddFormPointType));
    navigate('/mappage');
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={addSubmitHandler}>
      <FormControl>
        <FormLabel>Тема для обсуждения</FormLabel>
        <Input name="theme" type="text" required />

        <FormLabel>Во что ты одет?</FormLabel>
        <Input name="cloth" type="text" required />

        <Button type="submit">Add</Button>
      </FormControl>
    </form>
  );
}

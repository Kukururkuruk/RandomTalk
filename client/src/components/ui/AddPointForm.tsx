import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch } from '../../hooks/useReduxHook';
import type { AddFormPointType } from '../../types/PointType';
import addPointThunk from '../../redux/thunkActions/addPointThunk';

export default function CharacterAddForm({ initialCoordinates }: { initialCoordinates?: [number, number] }): JSX.Element {
  const dispatch = useAppDispatch();

  const addSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(event.currentTarget),
    ) as unknown as AddFormPointType;

    const updatedFormData = {
      ...formData,
      longitude: initialCoordinates ? initialCoordinates[1] : null,
      latitude: initialCoordinates ? initialCoordinates[0] : null,
    };

    void dispatch(addPointThunk(updatedFormData as AddFormPointType));

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={addSubmitHandler}>
      <FormControl>
        <FormLabel>Тема для обсуждения</FormLabel>
        <Input name="theme" type="text" />

        <FormLabel>Во что ты одет?</FormLabel>
        <Input name="cloth" type="text" />

        <Button type="submit">Add</Button>
      </FormControl>
    </form>
  );
}
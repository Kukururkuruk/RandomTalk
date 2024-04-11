import { Button, Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch } from '../../hooks/useReduxHook';
import type { AddFormPointType } from '../../types/PointType';
import addPointThunk from '../../redux/thunkActions/addPointThunk';

export default function CharacterAddForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const addSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(event.currentTarget),
    ) as unknown as AddFormPointType;

    void dispatch(addPointThunk(formData));

    event.currentTarget.reset()
  };

  return (
    <form onSubmit={addSubmitHandler}>
      <FormControl>
        <FormLabel>Тема для обсуждения</FormLabel>
        <Input name="theme" type="text" />

        <FormLabel>Во что ты одет?</FormLabel>
        <Input name="cloth" type="text" />

        <FormLabel>longitude</FormLabel>
        <Input name="longitude" type="text" />

        <FormLabel>latitude</FormLabel>
        <Input name="latitude" type="text" />

        <Button type="submit">Add</Button>
      </FormControl>
    </form>
  );
}

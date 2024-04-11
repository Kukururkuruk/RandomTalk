import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { closeEditStudent } from '../../../redux/slices/groupSlice';
import { editStudentThunk } from '../../../redux/thunkActions/studentThunkActions';


export default function EditPointModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const editStudent = useAppSelector((state) => state.group.editStudent);
  const groups = useAppSelector((state) => state.group.groups);
  const [input, setInput] = useState(editStudent?.name);
  const [selectedGroup, setSelectedGroup] = useState(editStudent?.groupId || '');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = Object.fromEntries(new FormData(e.currentTarget));
    dispatch(editStudentThunk({ ...editStudent, name, groupId: selectedGroup }));
    // dispatch(closeEditStudent());
  };

  const onClose = () => {
    dispatch(closeEditStudent());
  };

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit student</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={submitHandler}>
            <Stack spacing={3}>
              <Input value={input} onChange={changeHandler} name="name" />
              <FormControl>
                <FormLabel>Group</FormLabel>
                <Select
                  value={selectedGroup}
                  onChange={handleGroupChange}
                  name="group"
                  placeholder="Select group"
                >
                  {groups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <Button colorScheme="blue" type="submit">
                Ok
              </Button>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

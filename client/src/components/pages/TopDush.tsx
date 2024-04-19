import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Text, NumberInput, Flex, Box, List, ListItem } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getUsersThunk } from '../../redux/thunkActions/mapThunkAction';

export default function TopDush(): JSX.Element {
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector((store) => store.point.allUsers);
  const [activeUserIndex, setActiveUserIndex] = useState(0);

  useEffect(() => {
    void dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <Box className="App">
      <List as="ul" m={4}>
        {allUsers.length > 0 ? (
          allUsers.map((person, index) => (
            <ListItem
              key={person.id}
              className={`person-item ${index === activeUserIndex ? 'active' : ''}`}
            >
              <Card variant="outline">
                <CardHeader>
                  <Flex>
                    <Box ml={4} flexGrow={1}>
                      <Text fontWeight="bold">{`${index + 1} место - ${person.username}`}</Text>
                    </Box>
                    <Text ml={4}>{person.rating}</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
            </ListItem>
          ))
        ) : (
          <Text>Список пользователей пуст</Text>
        )}
      </List>
    </Box>
  );
}

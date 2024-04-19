import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Text, NumberInput, Flex, Box, List, ListItem } from '@chakra-ui/react';
import crown from '../../../public/crown.png'

export default function TopDush(): JSX.Element {

  return (
    <Box className="App" display='flex' justifyContent='center'>
      <List as="ul" m={4}>
              <Card variant="outline" width="500px" height="75px">
                <CardHeader>
                  <Flex alignContent='center' textAlign='center'>
                    <Box ml={4} flexGrow={1} display="flex">
                      <img src={crown} width="50px"/>
                      <Text fontWeight="bold">{`1 место - НикитосДушныйНос`}</Text> <br />
                      <img src={crown} width="50px"/>
                    </Box>
                    <Text ml={4}>0.1111</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
              <Card variant="outline" width="500px" height="75px">
                <CardHeader>
                  <Flex alignContent='center' textAlign='center'>
                    <Box ml={4} flexGrow={1}>
                      <Text fontWeight="bold">{`2 место - ЛюбительДракБомжей`}</Text> <br />
                    </Box>
                    <Text ml={4}>2.2</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
              <Card variant="outline" width="500px" height="75px">
                <CardHeader>
                  <Flex alignContent='center' textAlign='center'>
                    <Box ml={4} flexGrow={1}>
                      <Text fontWeight="bold">{`3 место - ЛегенларныйOne`}</Text> <br />
                    </Box>
                    <Text ml={4}>3</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
              <Card variant="outline" width="500px" height="75px">
                <CardHeader>
                  <Flex alignContent='center' textAlign='center'>
                    <Box ml={4} flexGrow={1}>
                      <Text fontWeight="bold">{`4 место - КристинаФиона`}</Text> <br />
                    </Box>
                    <Text ml={4}>3.14</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
              <Card variant="outline" width="500px" height="75px">
                <CardHeader>
                  <Flex alignContent='center' textAlign='center'>
                    <Box ml={4} flexGrow={1}>
                      <Text fontWeight="bold">{`5 место - НоскиМоейБабушки`}</Text> <br />
                    </Box>
                    <Text ml={4}>4</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
              <Card variant="outline" width="500px" height="75px">
                <CardHeader>
                  <Flex alignContent='center' textAlign='center'>
                    <Box ml={4} flexGrow={1}>
                      <Text fontWeight="bold">{`6 место - Дестроер666`}</Text> <br />
                    </Box>
                    <Text ml={4}> ̶6̶.̶6̶6̶  4.4</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
              <Card variant="outline" width="500px" height="75px">
                <CardHeader>
                  <Flex alignContent='center' textAlign='center'>
                    <Box ml={4} flexGrow={1}>
                      <Text fontWeight="bold">{`7 место - НиколайВторой`}</Text> <br />
                    </Box>
                    <Text ml={4}>4.9</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
              <Card variant="outline" width="500px" height="75px">
                <CardHeader>
                  <Flex alignContent='center' textAlign='center'>
                    <Box ml={4} flexGrow={1}>
                      <Text fontWeight="bold">{`8 место - БобрКурва`}</Text> <br />
                    </Box>
                    <Text ml={4}>5</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
              <Card variant="outline" width="500px" height="75px">
                <CardHeader>
                  <Flex alignContent='center' textAlign='center'>
                    <Box ml={4} flexGrow={1}>
                      <Text fontWeight="bold">{`9 место - Уличка`}</Text> <br />
                    </Box>
                    <Text ml={4}>5</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
              <Card variant="outline" width="500px" height="75px">
                <CardHeader>
                  <Flex alignContent='center' textAlign='center'>
                    <Box ml={4} flexGrow={1}>
                      <Text fontWeight="bold">{`10 место - admin`}</Text> <br />
                    </Box>
                    <Text ml={4}>100</Text>
                  </Flex>
                </CardHeader>
                <CardBody>{/* ... */}</CardBody>
                <CardFooter />
              </Card>
      </List>
    </Box>
  );
}

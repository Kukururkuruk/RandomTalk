import { Avatar, Flex, Text, WrapItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../hooks/useReduxHook'

type Props = {}

export default function UserPage({}: Props) {
  const user = useAppSelector((state) => state.auth.user);
  const points = useAppSelector((state) => state.point.points)

  return (
    <div>
    <div>Ваш профиль</div>
    <WrapItem>
    <Avatar src='https://bit.ly/broken-link' />
    <Text>{user.status === 'logged' ? user.username : 'guest'}</Text>
    </WrapItem>
    <Flex>
      {points.map((point)=> (
        <Card>
        <CardBody>
          <Text>Тема разговора: {point.theme}</Text><br />
          <Text>Отличительные черты вашего партнёра: {point.cloth}</Text><br />
        </CardBody>
      </Card>
      ))}
    </Flex>
    </div>
  )
}
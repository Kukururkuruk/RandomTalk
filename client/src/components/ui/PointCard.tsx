import React from 'react'
import { Card, CardBody, Text } from '@chakra-ui/react'
import { PointType } from '../../types/PointType'
import { UserStateType } from '../../types/authType';

type PointCardProps = {
    point: PointType;
    user: UserStateType;
}

export default function PointCard({point, user}: PointCardProps) {
    if (point.userId === (user.status === "logged" ? user.id : '')) 
  return (
    <Card border='2px' borderColor={point.status === true ? 'green' : 'red'}>
        <CardBody>
          <Text>Тема разговора: {point.theme}</Text><br />
          <Text>Отличительные черты вашего собеседника: {point.cloth}</Text><br />
        </CardBody>
    </Card>

  )
}
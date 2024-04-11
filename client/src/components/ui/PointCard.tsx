import React from 'react'
import { Card, CardBody, Text } from '@chakra-ui/react'
import { PointType } from '../../types/PointType'
import { UserStateType } from '../../types/authType';

type PointCardProps = {
    point: PointType;
    user: UserStateType;
}

export default function PointCard({point, user}: PointCardProps) {
    const starsList = [];
  for (let i = 0; i < point.; i++) {
    starsList.push(<i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />);
  }
    if (point.userId === (user.status === "logged" ? user.id : '')) 
  return (
    <Card border='2px' borderColor={point.status === true ? 'green' : 'red'}>
        <CardBody>
          <Text>Тема разговора: {point.theme}</Text><br />
          <Text>Отличительные черты вашего собеседника: {point.cloth}</Text><br />
          <Text>Рейтинг встречи: </Text>
        </CardBody>
    </Card>

  )
}
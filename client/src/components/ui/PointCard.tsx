import React from 'react'
import { Button, Card, CardBody, Text } from '@chakra-ui/react'
import { PointType } from '../../types/PointType'
import { UserStateType } from '../../types/authType';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { statusAccessThunk } from '../../redux/thunkActions/accessThunk';
import { banPointThunk } from '../../redux/thunkActions/addPointThunk';

type PointCardProps = {
    point: PointType;
    user: UserStateType;
}

export default function PointCard({point, user}: PointCardProps) {
  const dispatch = useAppDispatch();
  // const accesser = useAppSelector((state) => state.access.access?.pointId === point.id ? state.access.access.id : '')
    
  const banHandler = () => {
    dispatch(banPointThunk({userId: point.clientId, pointId: point.id}));
    
  };

    if (point.userId === (user.status === "logged" ? user.id : '')) 
  return (
    <Card border='2px' borderColor={point.status === true ? 'green' : 'red'}>
        <CardBody>
          <Text>Тема разговора: {point.theme}</Text><br />
          <Text>Отличительные черты вашего собеседника: {point.cloth}</Text><br />
        </CardBody>
        {point.status === true && (
          <>
          <Button bg='green' textColor='white' onClick={() => void dispatch(statusAccessThunk(point.id))}>Apply</Button>
          <Button bg='red' textColor='white' onClick={banHandler} >Reject</Button>
          </>
        )}
    </Card>

  )
}
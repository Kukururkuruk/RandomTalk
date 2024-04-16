import { Avatar, Flex, Text, WrapItem } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks/useReduxHook'
import PointCard from '../ui/PointCard'
import { useDispatch } from 'react-redux'
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction'
import HistoryCard from '../ui/HistoryCard'

type Props = {}

export default function UserPage({}: Props) {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { points } = useAppSelector((state) => state.point)
  const histories = useAppSelector((state) => state.history)

  useEffect(() => {
    void dispatch(getPointsThunk());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '40px', borderRadius: '10px', color: '#fff', fontFamily: 'sans-serif' }}>
      <div style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>Welcome, {user.status === 'logged' ? user.username : 'Guest'}</div>
      <WrapItem justifyContent="center">
        <Avatar src='https://bit.ly/broken-link' size="xl" /><br />
        <Text>Ваш рейтинг: {user.status === "logged" ? user.rating : ""} <i className="fa-solid fa-star"></i> </Text>
      </WrapItem>
      <Flex style={{ marginTop: '40px', flexDirection: 'column', alignItems: 'center' }}>
        <Text fontSize="xl" mb="20px">Your Conversations:</Text>
        {points.map((point) =>
          <PointCard point={point} key={point.id} user={user} />
        )} <br />
        <Text>История:</Text>
        {histories.map((history) => {
          const historyPoint = points.find((point) => point.id === history.pointId);
          return (
            <HistoryCard history={history} key={history.id} user={user} point={historyPoint}/>
          );
        })}
      </Flex>
    </div>
  )
}

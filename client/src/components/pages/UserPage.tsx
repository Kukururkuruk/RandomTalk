import { Flex, Text, WrapItem, Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/useReduxHook'
import PointCard from '../ui/PointCard'
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction'
import HistoryCard from '../ui/HistoryCard'
import { fetchHistoryThunk } from '../../redux/thunkActions/historyThunk'

type Props = {}

export default function UserPage({}: Props) {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { points } = useAppSelector((state) => state.point)
  const histories = useAppSelector((state) => state.history.histories)

  useEffect(() => {
    void dispatch(getPointsThunk());
    void dispatch(fetchHistoryThunk())
  }, [dispatch]);

  console.log(histories);
  
console.log(user.status === "logged" ? user.rating : "");

  return (
<div style={{ backgroundColor: '#4F535E', padding: '40px', borderRadius: '10px', color: '#FDA065', fontFamily: 'sans-serif', marginTop: "50px" }}>
  <div style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center', border: 'dashed 3px white', width: "max-content", margin: "auto" }}>Здравствуй, {user.status === 'logged' ? user.username : 'Guest'} !</div>
  <WrapItem justifyContent="center">
    <Text color={'#FDA065'}>Ваш рейтинг: {user.status === "logged" ? user.rating : ""} <i className="fa-solid fa-star" /> </Text>
  </WrapItem>
  <Flex style={{ marginTop: '40px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
    <Box>
      <Text fontSize="xl" mb="20px">Активные точки:</Text>
      {points.map((point) =>
        <PointCard point={point} key={point.id} user={user} />
      )} <br />
    </Box>
    <Box>
      <Text>История:</Text>
      {histories.map((history) => {
        const historyPoint = points.find((point) => point.id === history.pointId);
        return (
          <HistoryCard history={history} key={history.id} user={user} point={historyPoint}/>
        );
      })}
    </Box>
  </Flex>
</div>
  )
}

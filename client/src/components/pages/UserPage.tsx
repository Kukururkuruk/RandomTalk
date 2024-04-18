import { Flex, Text, WrapItem, Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks/useReduxHook'
import PointCard from '../ui/PointCard'
import { useDispatch } from 'react-redux'
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
  

  return (
    <div style={{ backgroundColor: 'FDA065', padding: '40px', borderRadius: '10px', color: '#fff', fontFamily: 'sans-serif' }}>
      <div style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>Здравствуй, {user.status === 'logged' ? user.username : 'Guest'} !</div>
      <WrapItem justifyContent="center">
        <Text>Ваш рейтинг: {user.status === "logged" ? user.rating : ""} <i className="fa-solid fa-star"></i> </Text>
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

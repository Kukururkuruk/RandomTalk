import { Avatar, Flex, Text, WrapItem } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import { useAppSelector } from '../../hooks/useReduxHook'
import PointCard from '../ui/PointCard'
import { useDispatch } from 'react-redux'
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction'

type Props = {}

export default function UserPage({}: Props) {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const {points} = useAppSelector((state) => state.point)

  useEffect(() => {
    void dispatch(getPointsThunk());
  }, [dispatch]);

  return (
    <div>
    <div>Ваш профиль</div>
    <WrapItem>
    <Avatar src='https://bit.ly/broken-link' />
    <Text>{user.status === 'logged' ? user.username : 'guest'}</Text>
    </WrapItem>
    <Flex>
      Ваши разговоры:
      {points.map((point)=> 
        <PointCard point={point} key={point.id} user={user}/>
      )}
    </Flex>
    </div>
  )
}
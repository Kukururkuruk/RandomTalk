// import React, { useState } from 'react';
// import { Rating } from 'react-simple-star-rating';
// import { Box, Flex, Text, Badge } from '@chakra-ui/react';
// import type { PointType } from '../../types/PointType';
// import type { UserStateType } from '../../types/authType';
// import type { HistoryType } from '../../types/historyType';
// import { useAppSelector } from '../../hooks/useReduxHook';
// import ratingPointService from '../../services/ratingService';

// type HistoryCardProps = {
//   history: HistoryType;
//   point: PointType;
//   user: UserStateType;
// };

// function HistoryCard({ history, point, user }: HistoryCardProps) {
//   const userID = useAppSelector((state) =>
//     state.auth.user.status === 'logged' ? state.auth.user.id : '',
//   );
//   const [ratingValue, setRatingValue] = useState(0);
//   const theme = point.id === history.pointId ? point.theme : '';
//   const author =
//     point.userId === history.userId ? (user.status === 'logged' ? user.username : '') : '';
//   const client =
//     point.clientId === history.clientId ? useAppSelector((state) => state.client.username) : '';

//   const handleRating = async (rate: number) => {
//     setRatingValue(rate);
//     console.log(point.clientId);
//     console.log(rate);
//     console.log(point.userId);
//     if (point.userId === userID) {
//       await ratingPointService.ratingPoint({ userId: point.clientId, rating: rate });
//       await ratingPointService.editRating(point.clientId);
//     } else {
//       await ratingPointService.ratingPoint({ userId: point.userId, rating: rate });
//       await ratingPointService.editRating(point.userId);
//     }
//   };

//   function HistoryCard({ history, point, user }: HistoryCardProps) {
//     const userID = useAppSelector((state) =>
//       state.auth.user.status === 'logged' ? state.auth.user.id : '',
//     );
//     const theme = point.id === history.pointId ? point.theme : '';
//     const author =
//       point.userId === userID
//         ? useAppSelector((state) =>
//             state.auth.user.status === 'logged' ? state.auth.user.username : '',
//           )
//         : useAppSelector((state) => state.client.username);
//     const client =
//       point.clientId === history.clientId
//         ? useAppSelector((state) => state.client.username)
//         : useAppSelector((state) =>
//             state.auth.user.status === 'logged' ? state.auth.user.username : '',
//           );

//     return (
//       <Box
//         w="70%"
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//         p="4"
//         mb="4"
//         boxShadow="md"
//       >
//         <Text fontSize="xl" fontWeight="semibold" mb="2">
//           Тема разговора: {theme}
//         </Text>

//         <Flex alignItems="center" justifyContent="space-between">
//           <Flex alignItems="center">
//             <Text>Автор встречи: {author}</Text>
//             <Text>Собеседник: {client}</Text>
//             <div>
//               <Rating
//                 onClick={handleRating}
//                 size={50}
//                 transition
//                 showTooltip
//                 tooltipArray={[
//                   'ОТКРОЙТЕ ФОРТОЧКУ',
//                   'Чуть душно',
//                   'Норм',
//                   'Приятный собеседник',
//                   'Ля какой',
//                 ]}
//                 fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
//                 SVGstyle={{ display: 'inline' }}
//               />
//             </div>
//           </Flex>
//           <Badge colorScheme="green">{}</Badge>
//         </Flex>
//       </Box>
//     );
//   }
// }



// export default HistoryCard;

import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Box, Flex, Text, Badge} from '@chakra-ui/react';
import { PointType } from '../../types/PointType';
import { UserStateType } from '../../types/authType';
import { HistoryType } from '../../types/historyType';
import { useAppSelector } from '../../hooks/useReduxHook';
import ratingPointService from '../../services/ratingService';
import paperbg from '../../../public/paperbg.jpg'
type HistoryCardProps = {
    history: HistoryType;
    point: PointType;
    user: UserStateType;
  };

const HistoryCard = ({ history, point, user } : HistoryCardProps) => {
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false)
  const [ratingValue, setRatingValue] = useState(0);
    const userID = useAppSelector((state) => state.auth.user.status === 'logged' ? state.auth.user.id : '')
    const theme = point.id === history.pointId ? point.theme : ''
    const author = point.userId === userID ?
    useAppSelector((state) => state.auth.user.status === 'logged' ? state.auth.user.username : '') :
    useAppSelector((state) => state.client.username);
    const client = point.clientId === history.clientId ? useAppSelector((state) => state.client.username) : (useAppSelector((state) => state.auth.user.status === 'logged' ? state.auth.user.username : ''))

    const handleRating = async (rate: number) => {
      setRatingValue(rate);
      console.log(point.clientId);
      console.log(rate);
      console.log(point.userId);
      if (point.userId === userID) {
        await ratingPointService.ratingPoint({ userId: point.clientId, rating: rate });
        await ratingPointService.editRating(point.clientId);
      } else {
        await ratingPointService.ratingPoint({ userId: point.userId, rating: rate });
        await ratingPointService.editRating(point.userId);
      }
      setIsRatingSubmitted(true)
    };
    
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      mb="4"
      boxShadow="md"
      color="#000000"
      bgImage={paperbg}
      width="700px"

    >
      <Text fontSize="xl" fontWeight="semibold" mb="2" >
        Тема разговора: {theme}
      </Text>
      <Flex alignItems="center" justifyContent="center" >
        <Flex alignItems="center" flexDirection="column">
          <Text>Создатель: {author}</Text>
          <Text>Собеседник: {client}</Text>
          <div>
              <Rating
                onClick={handleRating}
                size={50}
                transition
                style={{display: "flex", justifyContent: "start" }}
                showTooltip
                tooltipArray={[
                  'ОТКРОЙТЕ ФОРТОЧКУ',
                  'Чуть душно',
                  'Норм',
                  'Приятный собеседник',
                  'Ля какой',
                ]}
                fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
                SVGstyle={{ display: 'inline' }}
              />
            </div>)}
        </Flex>
        <Badge colorScheme="green">{}</Badge>
      </Flex>
    </Box>
  );
};

export default HistoryCard;
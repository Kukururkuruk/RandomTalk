// import React, { useState, useEffect } from 'react';
// import { Button, Card, CardBody, Text } from '@chakra-ui/react';
// import type { PointType } from '../../types/PointType';
// import type { UserStateType } from '../../types/authType';
// import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
// import { banPointThunk } from '../../redux/thunkActions/addPointThunk';
// import { updateAgreePointThunk } from '../../redux/thunkActions/updatePointThunk';
// import getClientThunk from '../../redux/thunkActions/getClientThunk';

// type PointCardProps = {
//   point: PointType;
//   user: UserStateType;
// };

// export default function PointCard({ point, user }: PointCardProps) {
//   const dispatch = useAppDispatch();
//   const clientName = useAppSelector((state) => state.client.username);
//   const [buttonsVisible, setButtonsVisible] = useState(true);

//   const banHandler = () => {
//     dispatch(banPointThunk({ userId: point.clientId, pointId: point.id }));
//   };

//   useEffect(() => {
//     void dispatch(getClientThunk(point.clientId));
//   }, [dispatch]);

//   const handleApplyButtonClick = () => {
//     dispatch(updateAgreePointThunk(point.id));
//     setButtonsVisible(false);
//   };

//   if (point.userId === (user.status === 'logged' ? user.id : '')) {
//     return (
//       <Card border="2px" borderColor={point.status === true ? 'green' : 'red'}>
//         <CardBody>
//           <Text>Тема разговора: {point.theme}</Text>
//           <br />
//           {point.status === true && (
//             <>
//               <Text>Имя вашего собеседника: {clientName}</Text>
//               <Text>Описание вашего собеседника: {point.reason}</Text>
//               <br />
//             </>
//           )}
//         </CardBody>
//         {point.status === true && buttonsVisible && (
//           <>
//             <Button bg="green" textColor="white" onClick={handleApplyButtonClick}>
//               Apply
//             </Button>
//             <Button bg="red" textColor="white" onClick={banHandler}>
//               Reject
//             </Button>
//           </>
//         )}
//       </Card>
//     );
//   }
//   return null;
// }


import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, Text } from '@chakra-ui/react';
import { PointType } from '../../types/PointType';
import { UserStateType } from '../../types/authType';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { updateAgreePointThunk, updateStatusPointFalseThunk, updateVisibilityPointFalseThunk } from '../../redux/thunkActions/updatePointThunk';
import getClientThunk from '../../redux/thunkActions/getClientThunk';
import { addHistoryThunk } from '../../redux/thunkActions/historyThunk';
import { banPointThunk } from '../../redux/thunkActions/addPointThunk';

type PointCardProps = {
  point: PointType;
  user: UserStateType;
};

export default function PointCard({ point, user }: PointCardProps) {
  const dispatch = useAppDispatch();
  const clientName = useAppSelector((state) => state.client.username);
  const [buttonsVisible, setButtonsVisible] = useState(true);

  useEffect(() => {
    void dispatch(getClientThunk(point.clientId));
  }, [dispatch]);

  const handleApplyButtonClick = () => {
    dispatch(updateAgreePointThunk(point.id));
    dispatch(addHistoryThunk({userId: point.userId, clientId: point.clientId, pointId: point.id}))
    dispatch(updateStatusPointFalseThunk(point.id))
    setButtonsVisible(false);
  };

  const banHandler = () => {
    dispatch(banPointThunk({ userId: point.clientId, pointId: point.id }));
    dispatch(updateStatusPointFalseThunk(point.id))
    setButtonsVisible(false);
  };

  const endHandler = () => {
    dispatch(updateVisibilityPointFalseThunk(point.id))
    setButtonsVisible(false)
  }



  if (point.userId === (user.status === 'logged' ? user.id : '')) {
    return (
      <Card border="2px" borderColor={point.status === true ? 'green' : 'gray'} display={point.visibility===false ? "none" : "flex"}>
        <CardBody>
          <Text>Тема разговора: {point.theme}</Text>
          <br />
          {point.status === true && (
            <>
              <Text>Имя вашего собеседника: {clientName}</Text>
              <Text>Описание вашего собеседника: {point.reason}</Text>
              <br />
            </>
          )}
        </CardBody>
        {point.status === true && buttonsVisible && (
          <>
            <Button bg="green" textColor="white" onClick={handleApplyButtonClick}>
              Apply
            </Button>
            <Button bg="red" textColor="white" onClick={banHandler}>
              Reject
            </Button>
          </>
        )}
        <Button bg="orange" textColor="white" onClick={endHandler}>Закончить встречу</Button>
      </Card>
    );
  } else {
    return null;
  }
}
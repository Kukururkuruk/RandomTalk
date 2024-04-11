import React, { useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction';

export default function MapPage2(): JSX.Element {
  const points = useAppSelector((store) => store.point.points);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPointsThunk());
  }, []);

  return (
    <YMaps query={{ apikey: "2625da4a-fb70-440e-b1f7-b2d072017058" }}>
      <Map
        defaultState={{
          center: [55.75222, 37.61763],
          zoom: 10,
        }}
      >
        {points.map((object) => (
          <Placemark
            key={object.id}
            geometry={{
              type: 'Point',
              coordinates: [Number(object.latitude), Number(object.longitude)],
            }}
            properties={{
              balloonContentBody: `
                <div>
                  <h2>${object.theme}</h2>
                  <p>${object.cloth}</p>
                </div>
              `,
            }}
          />
        ))}
      </Map>
    </YMaps>
  );
}

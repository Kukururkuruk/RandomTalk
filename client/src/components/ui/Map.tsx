import React, { useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction';
import giphy from '../../giphy.gif';

export default function MyMap(): JSX.Element {
  const points = useAppSelector((store) => store.point.points);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getPointsThunk());
  }, []);
  const mapStyle = {
    width: '600px',
    height: '600px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '10px auto',
  };
  return (
    <YMaps query={{ apikey: '2625da4a-fb70-440e-b1f7-b2d072017058' }}>
      <Map
        style={mapStyle}
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
              balloonContentHeader: `${object.theme}`,
              balloonContentBody: `${object.cloth}`,
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: object.img || giphy, // Если гифка не выбрана, используем первую по умолчанию
              iconImageSize: [30, 42],
              iconImageOffset: [-3, -42],
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
        ))}
      </Map>
    </YMaps>
  );
}

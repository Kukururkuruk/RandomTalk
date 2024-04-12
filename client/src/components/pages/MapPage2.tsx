import React, { useCallback, useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction';

export default function MapPage2({ onCoordinateSelection }): JSX.Element {
  const points = useAppSelector((store) => store.point.points);
  const [mapClickCoords, setMapClickCoords] = useState(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPointsThunk());
  }, []);

  const handleMapClick = useCallback((coords: [number, number]) => {
    onCoordinateSelection(coords);
  });

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
        onClick={(e) => {
          const coords = e.get('coords');
          setMapClickCoords(coords);
          onCoordinateSelection(coords);
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
            // options={{
            //   iconLayout: 'default#image',
            //   iconImageHref: myIcon,
            //   iconImageSize: [30, 42],
            //   iconImageOffset: [-3, -42],
            // }}
            modules={
              ['geoObject.addon.balloon', 'geoObject.addon.hint']
          }
          />
        ))}

        {mapClickCoords && (
          <Placemark
            geometry={mapClickCoords}
            options={{
              zIndex: 100,
            }}
          />
        )}
      </Map>
    </YMaps>
  );
}

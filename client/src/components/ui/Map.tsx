import React, { useEffect } from 'react';
import { YMaps, Map, Placemark, GeolocationControl } from '@pbe/react-yandex-maps';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getPointsThunk } from '../../redux/thunkActions/mapThunkAction';
import giphy from '../../giphy.gif';
import { getBansThunk } from '../../redux/thunkActions/addPointThunk';
import '../../../public/cat.css'

export default function MyMap(): JSX.Element {
  const points = useAppSelector((store) => store.point.points);
  const bans = useAppSelector((store) => store.point.bans);
  const userId = useAppSelector((store) => store.auth.user.status === "logged" ? store.auth.user.id : '');

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPointsThunk());
    void dispatch(getBansThunk());
  }, [dispatch]);

  const filteredPoints = points.filter(
      (point) => !bans.some((ban) => ban.pointId === point.id && ban.userId === userId)
    );
    

    const mapContainerStyle = {
      border: '10px solid #4F535E',
      borderRadius: '15px', // Увеличим радиус скругления, чтобы соответствовать внешней рамке
      width: '620px', // Добавим 20px к ширине и высоте, чтобы учесть толщину рамки
      height: '620px',
      margin: '10px auto',
    };
    
    const mapStyle = {
      width: '600px',
      height: '600px',
      borderRadius: '15px',
    };
    
    return (
      <div style={mapContainerStyle}>
        <YMaps query={{ apikey: '2625da4a-fb70-440e-b1f7-b2d072017058' }}>
          <Map
            style={mapStyle}
            defaultState={{
              center: [55.75222, 37.61763],
              zoom: 10,
            }}
          >
            {filteredPoints.map((object) => (
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
            <GeolocationControl options={{ float: "left" }} />
          </Map>
        </YMaps>
      </div>
    );
}    
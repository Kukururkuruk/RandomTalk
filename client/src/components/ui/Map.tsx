import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { PointType } from '../../types/PointType';

type MapProps = {
  points: PointType[];
};

function Map({ points }: MapProps): JSX.Element  {
  const [data, setData] = useState(points);
  console.log({ data });

  useEffect(() => {
    if (data.length) {
      const script = document.createElement('script');
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=2625da4a-fb70-440e-b1f7-b2d072017058&lang=ru_RU";
      script.async = true;
      script.onload = () => {
        ymaps.ready(() => {
          const map = new ymaps.Map('map', {
            center: [55.751322, 37.6176],
            zoom: 13,
          });

          for (let i = 0; i < data.length; i += 1) {
            axios.get(`/api/menus/${i}`).then((res) => {
              const placemark = new ymaps.Placemark(
                [Number(data[i].latitude), Number(data[i].longitude)],
                {
                  balloonContentHeader: res.data.name,
                  balloonContent: `<a href='/kebabPage/${data[i].id}'>Подробнее</a>`,
                  balloonContentFooter: `Цена: ${res.data.price} ₽`,
                },
                {
                  iconLayout: 'default#image',
                  iconImageHref:
                    'https://art.kartinkof.club/uploads/posts/2023-07/thumbs/1690008779_art-kartinkof-club-p-idei-dlya-srisovki-shaurma-milii-94.png',
                  iconImageSize: [30, 30],
                  iconImageOffset: [-15, -15],
                },
              );

              map.geoObjects.add(placemark);
            });
          }
        });
      };

      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [data]);

  const mapStyle = {
    width: '600px',
    height: '600px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '10px auto',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div id="map" style={mapStyle} />
    </div>
  );
}

export default Map;

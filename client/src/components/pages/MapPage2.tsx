import React, { useCallback, useState } from 'react';
import { YMaps, Map, Placemark, GeolocationControl } from '@pbe/react-yandex-maps';
import { Flex, Image, Select } from '@chakra-ui/react';
import giphy from '../../giphy.gif';
import giphy1 from '../../giphy (1).gif';
import giphy2 from '../../giphy (2).gif';
import giphy3 from '../../giphy (3).gif';
import giphy4 from '../../giphy (4).gif';

const gifs = [
  { id: 1, src: giphy },
  { id: 2, src: giphy1 },
  { id: 3, src: giphy2 },
  { id: 4, src: giphy3 },
  { id: 5, src: giphy4 },
];

export default function MapPage2({ onCoordinateSelection, onGifSelection }): JSX.Element {
  const [mapClickCoords, setMapClickCoords] = useState(null);
  const [selectedGif, setSelectedGif] = useState(giphy);

  const handleSelectChange = (event) => {
    const gif = event.target.value;
    setSelectedGif(gif);
    onGifSelection(gif);
  };

  const handleGifClick = useCallback((gif: string) => {
    onGifSelection(gif);
  });

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

        {mapClickCoords && (
          <Placemark
            geometry={mapClickCoords}
            options={{
              zIndex: 100,
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: selectedGif,
              iconImageSize: [30, 42],
              iconImageOffset: [-3, -42],
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
        )}
        <GeolocationControl options={{ float: "left" }} />
      </Map>
      {/* Всплывающий балун */}
      {mapClickCoords && (
        <div className="balloon">
          <h3>Выберите гифку:</h3>
          <Flex align="center">
            {' '}
            {/* Обернем Select и Image в Flex */}
            <Select value={selectedGif} onChange={handleSelectChange} marginRight="2">
              {gifs.map((gif) => (
                <option key={gif.id} value={gif.src}>
                  {`GIF ${gif.id}`}
                </option>
              ))}
            </Select>
            <Image src={selectedGif} boxSize="200px" />
          </Flex>
        </div>
      )}
    </YMaps>
  );
}

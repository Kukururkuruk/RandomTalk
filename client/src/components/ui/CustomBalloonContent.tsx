import React, { useState } from 'react';
import { Box, Image, Select } from '@chakra-ui/react'; // Import Chakra UI components

function CustomBalloonContent() {
  const [selectedGif, setSelectedGif] = useState(gifs[0]);

  const handleGifChange = (newValue) => {
    setSelectedGif(gifs.find((gif) => gif.id === parseInt(newValue)));
  };

  return (
    <Box className="custom-balloon-content">
      <Image src={selectedGif.src} alt={selectedGif.theme} boxSize="100px" />
      <Select value={selectedGif.id.toString()} onChange={handleGifChange} placeholder="Select GIF">
        {gifs.map((gif) => (
          <option key={gif.id} value={gif.id.toString()}>
            {gif.theme}
          </option>
        ))}
      </Select>
    </Box>
  );
}

export default CustomBalloonContent;

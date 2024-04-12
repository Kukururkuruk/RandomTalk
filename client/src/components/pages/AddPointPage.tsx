import React, { useCallback, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import AddPointForm from '../ui/AddPointForm';
import MapPage2 from './MapPage2';

function AddPointPage(): JSX.Element {
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
 console.log(selectedCoordinates);
 
  

  const handleCoordinateSelection = useCallback((newCoordinates) => {
    setSelectedCoordinates(newCoordinates);
  }, []);

  return (
    <Flex>
      <Box>
        <AddPointForm  initialCoordinates={selectedCoordinates}  />
      </Box>
      <Box>
        <MapPage2 onCoordinateSelection={handleCoordinateSelection} />
      </Box>
    </Flex>
  );
}

export default AddPointPage;

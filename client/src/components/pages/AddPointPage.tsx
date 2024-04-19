import React, { useCallback, useState } from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import AddPointForm from '../ui/AddPointForm';
import MapPage2 from './MapPage2';

function AddPointPage(): JSX.Element {
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [selectedGif, setSelectedGif] = useState(null);
 console.log(selectedCoordinates);
 
  

  const handleCoordinateSelection = useCallback((newCoordinates) => {
    setSelectedCoordinates(newCoordinates);
  }, []);
  const handleGifSelection = useCallback((newGif) => {
    setSelectedGif(newGif);
  }, []);


  return (
<Flex justify="center" align="center" minHeight="100vh" p={12}>
  <Box boxShadow="2xl" rounded="md" overflow="hidden">
    <Grid
      templateColumns={{ md: "repeat(2, minmax(0, 1fr))" }}
      gap={10}
      background="#4F535E"
      alignItems="center" 
    >
      <Grid item display="flex" justifyContent="center" alignItems="center">
        <AddPointForm initialCoordinates={selectedCoordinates} initialGif={selectedGif} />
      </Grid>
      <Grid item>
<div style={{ marginLeft: '-50px' }}>
  <MapPage2
    onCoordinateSelection={handleCoordinateSelection}
    onGifSelection={handleGifSelection}
  />
</div>
      </Grid>
    </Grid>
  </Box>
</Flex>


  );
}

export default AddPointPage;

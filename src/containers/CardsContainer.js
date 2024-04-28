import React from 'react';
import BrewerySingleCard from '../components/BrewerySingleCard';
import { useAppContext } from '../context/AppContext';
import { Flex, Spinner, Spacer, Stack } from '@chakra-ui/react';


const CardsContainer = () => {
  const { breweryData, loading } = useAppContext();


  return (
    <>
      {!loading && (
          <Flex  justifyContent="center" alignItems="center" flexWrap="wrap" m='12' >
            {breweryData.slice(0, 4).map((actualBrewery, index) => (
              <BrewerySingleCard actualBrewery={actualBrewery} key={index} />
            ))}
          </Flex>
        

      )}
      {loading && <Spinner size="48px" />}
    </>
  );
};

export default CardsContainer;
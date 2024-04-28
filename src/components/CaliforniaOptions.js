import React from 'react'
import { useEffect, useState } from "react";
import { useAppContext } from '@/context/AppContext';
import {Text, Flex, Spinner, Spacer } from '@chakra-ui/react';
import BrewerySingleCard from './BrewerySingleCard';


const CaliforniaOptions = () => {
    const {loading, stateData} = useAppContext();
    return (
      <>
        <>
      {!loading && (
        <>
        <Text fontSize="32px" fontWeight={800} ml={8}> Opciones en California</Text>
          <Flex direction={'column'}  justifyContent="center" alignItems="center" flexWrap="wrap" m={12}  >
            {stateData.slice(0, 4).map((stateData, index) => (
              <BrewerySingleCard actualBrewery={stateData} key={index} />
            ))}
            <Spacer />
          </Flex>
        </>
      )}
      {loading && <Spinner size="48px" />}
    </>
        
      </>
    );
  };


export default CaliforniaOptions
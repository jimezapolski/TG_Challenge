import React from 'react';
import { Text, Stack } from '@chakra-ui/react';
import CardsContainer from '@/containers/CardsContainer'; // Asegúrate de importar tu contenedor de tarjetas

const MoreOptions = () => {
  
  return (
    <>
      <Text mt="20px"  fontSize="32px" fontWeight={800} ml={8}>Todas las opciones</Text>
      <Stack  direction={'column'} >
      <CardsContainer/>
      </Stack>
    </>
  );
};

export default MoreOptions;

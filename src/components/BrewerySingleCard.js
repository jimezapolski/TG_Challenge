import React from 'react';
import { Box, Flex, Text, Button, Image, Icon } from '@chakra-ui/react';
import { MdPhone } from 'react-icons/md';
import { GrLocation } from "react-icons/gr";
import Link from 'next/link';


const BrewerySingleCard = ({ actualBrewery }) => {
    if (!actualBrewery || typeof actualBrewery !== 'object') {
        return null; 
    }

    const { id, name, address_1, city, state, phone } = actualBrewery;

    return (
        <>
        <Box bg="#13132D" w={328} h={190} borderRadius={8} overflow="hidden" p="6" mb="12" ml={12}>

            <Text fontFamily="Roboto" mt={6} mb="8" fontSize="18px" fontWeight="bold" >{name}</Text>

            <Flex mt="2">
                <Image src={'https://images.pexels.com/photos/2454609/pexels-photo-2454609.jpeg'} w={71} h={71} borderRadius= '50%' boxSize="71px" mr="4" />
                <Flex direction="column" mt="4" ml="4"  mb="8" fontSize="14px" >
                
                    <Text fontFamily="Roboto"> <Icon as={GrLocation} mr="2" /> {`${address_1}, ${city}, ${state}`}</Text>
                    
                    <Text fontFamily="Roboto" mb="8"> <Icon as={MdPhone} color="white" mr="2" />{phone}</Text>
                </Flex>

            </Flex>
            <Flex justifyContent="center">
                <Link href={`/brewery/${id}`} >
                <Button mt="4"
                    colorScheme="teal"
                    variant="outline"
                    bg={['linear-gradient(90deg, #3540E8 0%, #E41AD6 100%)', 'linear-gradient(90deg, #3540E8 0%, #E41AD6 100%)']}
                    textAlign="center"
                    w={244}
                    h={32}
                    p={4}
                    borderRadius={8}
                    _hover={{
                        transform: "scale(1.1)"
                      }}
                >Ver Más</Button>
                </Link>
            </Flex>
        </Box>
        </>
    );
};

export default BrewerySingleCard;

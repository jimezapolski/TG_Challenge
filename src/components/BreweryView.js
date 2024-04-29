import React from 'react'
import { Text, Flex, Icon, Image, Box, Stack, Link, Button, Spacer, ButtonGroup } from '@chakra-ui/react';
import { MdPhone } from 'react-icons/md';
import { GrLocation } from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
import { BellIcon } from '@chakra-ui/icons'
import { FaUser } from "react-icons/fa";

import Footer from './Footer';

const BreweryView = ({ brewery }) => {

    if (!brewery || typeof brewery !== 'object') {
        return null;
    }
    const { name, address_1, city, state, phone } = brewery;

    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' m={8} >
                <Link href={`/`} >
                    <Box p='2'>
                        <Button _hover={{ color: "rgba(53, 64, 232, 1)" }} ><FaArrowLeft mt={24} color="white" boxSize={20} /></Button>
                    </Box>
                </Link>
                <Spacer />
                <ButtonGroup gap='2' >
                    <Button colorScheme='teal' _hover={{ color: "rgba(53, 64, 232, 1)" }}><BellIcon boxSize={20} /></Button>
                    <Button colorScheme='teal' _hover={{ color: "rgba(53, 64, 232, 1)" }}><Icon as={FaUser} ml="2" boxSize={17} /></Button>
                </ButtonGroup>
            </Flex>
            <Text mt="20px" ml={12} fontFamily="Roboto" fontSize={32} fontWeight={700} >{name}</Text>
            <Flex direction="column" ml={12} mt="8" mb="8" fontSize="14px" >
                <Text fontFamily="Roboto"> <Icon as={GrLocation} mr="2" /> {`${address_1}, ${city}, ${state}`}</Text>
                <Text fontFamily="Roboto" mt={4} mb="8"> <Icon as={MdPhone} color="white" mr="2" />{phone}</Text>
            </Flex>
            <Flex direction="column" mt="8" ml={12} mb="8"  >
                <Stack direction='row'>
                    <Box>
                        <Image src="../assets/img/imagen1.jpg" alt="Imagen 1" height="104px" width="156px" borderRadius={8} />
                    </Box>
                    <Box>
                        <Image src="../assets/img/imagen2.jpg" alt="Imagen 2" height="104px" width="156px" borderRadius={8} />
                    </Box>
                    <Box>
                        <Image src="../assets/img/imagen1.jpg" alt="Imagen 1" height="104px" width="156px" borderRadius={8} />
                    </Box>
                    <Box>
                        <Image src="../assets/img/imagen2.jpg" alt="Imagen 2" height="104px" width="156px" borderRadius={8} />
                    </Box>
                </Stack>
            </Flex>

            <Text m={12} fontFamily="Roboto" fontSize={24} fontWeight={700}> Opiniones</Text>

            <Box overflow="hidden" p="6" mb="12" ml={12}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Image src={'../assets/img/persona1.jpeg'} w={38.47} h={38.47} borderRadius='100%' boxSize="50px" mr="4" />
                        <Box>
                            <Text fontFamily="Roboto" fontWeight="bold" mt={4} mb={8} ml={4}>Cris</Text>
                        </Box>
                    </Flex>
                    <Link>
                        <Text fontFamily="Roboto" fontSize={12} color="#E41AD6" ml="auto">Responder</Text>
                    </Link>
                </Flex>
                <Box mt={4}>
                    <Text fontFamily="Roboto" ml={4}>Me encantan este tipo de cervezas! La velocidad de wifi es muy bue...</Text>
                </Box>
            </Box>
            <Box overflow="hidden" p="6" mb="12" ml={12}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Image src={'../assets/img/persona2.jpeg'} w={38.47} h={38.47} borderRadius='100%' boxSize="50px" mr="4" />
                        <Box>
                            <Text fontFamily="Roboto" fontWeight="bold" mt={4} mb={8} ml={4}>Julia</Text>
                        </Box>
                    </Flex>
                    <Link>
                        <Text fontFamily="Roboto" fontSize={12} color="#E41AD6" ml="auto">Responder</Text>
                    </Link>
                </Flex>
                <Box mt={4}>
                    <Text fontFamily="Roboto" ml={4}>Me encantan este tipo de cervezas! La velocidad de wifi es muy bue...</Text>
                </Box>
            </Box>
            <Box overflow="hidden" p="6" mb="12" ml={12}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Image src={'../assets/img/persona2.jpeg'} w={38.47} h={38.47} borderRadius='100%' boxSize="50px" mr="4" />
                        <Box>
                            <Text fontFamily="Roboto" fontWeight="bold" mt={4} mb={8} ml={4}>Dina</Text>
                        </Box>
                    </Flex>
                    <Link>
                        <Text fontFamily="Roboto" fontSize={12} color="#E41AD6" ml="auto">Responder</Text>
                    </Link>
                </Flex>
                <Box mt={4}>
                    <Text fontFamily="Roboto" ml={4}>Me encantan este tipo de cervezas! La velocidad de wifi es muy bue...</Text>
                </Box>
            </Box>
            <Box overflow="hidden" p="6" mb="12" ml={12}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Image src={'../assets/img/persona1.jpeg'} w={38.47} h={38.47} borderRadius='100%' boxSize="50px" mr="4" />
                        <Box>
                            <Text fontFamily="Roboto" fontWeight="bold" mt={4} mb={8} ml={4}>Robert</Text>
                        </Box>
                    </Flex>
                    <Link>
                        <Text fontFamily="Roboto" fontSize={12} color="#E41AD6" ml="auto">Responder</Text>
                    </Link>
                </Flex>
                <Box mt={4}>
                    <Text fontFamily="Roboto" ml={4}>Me encantan este tipo de cervezas! La velocidad de wifi es muy bue...</Text>
                </Box>
            </Box>
            <Flex justifyContent="center">
                <Link href={`/`} >
                    <Button mt="4"
                        colorScheme="teal"
                        variant="outline"
                        bg={['linear-gradient(90deg, #3540E8 0%, #E41AD6 100%)', 'linear-gradient(90deg, #3540E8 0%, #E41AD6 100%)']}
                        textAlign="center"
                        w={342}
                        h={48}
                        p={4}
                        borderRadius={8}
                        mb={8}
                        _hover={{
                            transform: "scale(1.1)"
                        }}
                    >Reservar mesa</Button>
                </Link>
            </Flex>

            <Flex justifyContent="center" mb={60}>
                <Link href={`/`} >
                    <Button mt="4"
                        mb={12}
                        variant="outline"
                        textAlign="center"
                        w={342}
                        h={48}
                        p={4}
                        borderRadius={8}
                        border="1px solid"
                        borderColor={['linear-gradient(90deg, #3540E8 0%, #E41AD6 100%)', 'linear-gradient(90deg, #3540E8 0%, #E41AD6 100%)']}
                        _hover={{
                            transform: "scale(1.1)"
                        }}
                    >Opciones de transporte</Button>
                </Link>
            </Flex>
            <Footer />
        </>
    )
}

export default BreweryView
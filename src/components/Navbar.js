import React from 'react'
import { Button, Flex, Spacer, Box, Icon , ButtonGroup, Link} from '@chakra-ui/react'
import { HamburgerIcon, BellIcon } from '@chakra-ui/icons'
import { FaUser } from "react-icons/fa";


const Navbar = () => {
    return (
   
        <Flex minWidth='max-content' alignItems='center' gap='2' m={8} >
            <Link href={`/`} _hover={{ color: "rgba(53, 64, 232, 1)" }}>
                <Box p='2' >
                <Button><HamburgerIcon boxSize={20}/></Button>
            </Box>
            </Link>
            
            <Spacer />
            <ButtonGroup gap='2' >
                <Button colorScheme='teal' _hover={{ color: "rgba(53, 64, 232, 1)" }}><BellIcon   boxSize={20}/></Button>
                <Button colorScheme='teal' _hover={{ color: "rgba(53, 64, 232, 1)" }}><Icon as={FaUser} ml="2" boxSize={17}/></Button>
            </ButtonGroup>
        </Flex>
        
    )
}

export default Navbar
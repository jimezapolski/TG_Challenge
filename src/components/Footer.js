import { Flex, Icon, Text, Link, Box} from "@chakra-ui/react";
import { FaCalendarAlt, FaHome, FaComment } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      height="80px"
      bg="gray.600"
      zIndex={1000} 
    >
    <Flex
    mt={32}
    mb={8}
      justify="space-around"
      align="center"
      bg=" linear-gradient(180deg, #040210 0%, rgba(4, 2, 16, 0.5) 100%)"
      color="white"
      py="4"
      px="2"
      fontFamily="roboto"
      
    >
      <Flex direction="column" align="center" _hover={{ color: "rgba(53, 64, 232, 1)" }}
>
        <Icon as={FaCalendarAlt} boxSize={20} />
        <Text fontSize="sm">Calendario</Text>
      </Flex>
      <Link href={`/`} >
      <Flex direction="column" align="center" _hover={{ color: "rgba(53, 64, 232, 1)" }}>
        <Icon as={FaHome} boxSize={20}/>
        <Text fontSize="sm" >Inicio</Text>
      </Flex>
      </Link>
      <Flex direction="column" align="center" _hover={{ color: "rgba(53, 64, 232, 1)" }}>
        <Icon as={FaComment} boxSize={20} />
        <Text fontSize="sm">Chat</Text>
      </Flex>
    </Flex>
    </Box>
  );
};

export default Footer;

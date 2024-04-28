import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Link} from '@chakra-ui/react'

const AlertHome = () => {
  return (
    <Link href={'/'} _hover={{ color: "#E41AD6" }}>
    <Alert mt="20px" status="warning" variant="left-accent" ml={8}>
      <AlertIcon  boxSize={24}/> 
      <Box ml={8}>
        <AlertTitle>Happy Hour</AlertTitle>
        <AlertDescription>
        16:00 - 17:00 hs MEX
        </AlertDescription>
      </Box>
    </Alert>
    </Link>
  )
}

export default AlertHome;
import { Heading , Box, Text, Input, InputGroup, HStack, InputRightElement, Icon, Flex   } from '@chakra-ui/react'
import { FaRegGrinStars, FaSearch, FaArrowDown, FaAngleDown, FaPaperclip, FaGripVertical } from 'react-icons/fa';
import Card from './components/Card';

function App() {
    return (
        <Box minHeight="100vh" bg="gray.800" px="75px">
            <Heading color="white" pt="50px" fontSize='52px'><Icon as={FaRegGrinStars}  w={10} h={10} color='yellow' /> SCTR Teammates</Heading>
            <Text pt="25px" color="white">Get to know your talented co-workers...</Text>
            <Text fontWeight="600" borderBottom='1px' borderBottomColor='gray.400' as='span' bg="yellow.800" color="gray.400" borderRadius="2px"><Icon as={FaPaperclip}  w={4} h={4} color='gray.400' transform= "rotate(-90deg)" /> Complete this form so we can add your orifuke</Text>
            <Text pt="25px" color="white"><Icon as={FaArrowDown}  w={4} h={4} color='white' /> Click <Text px='5px' as='span' bg="gray.700" color="red" borderRadius="4px" > Gallery View </Text>&nbsp;to see the board organized by location or department, or switch to table view.</Text>
            <HStack mb="25px" py="25px" borderBottom='1px' borderBottomColor='gray.400'>
                <Flex  width="50%" align="flex-end" cursor="pointer"><Icon as={FaGripVertical}  w={6} h={6} color='white' /><Heading color="white" fontSize='24px'>&nbsp; Gallery View&nbsp; </Heading><Icon as={FaAngleDown}  w={6} h={6} color='white' /></Flex >
                <InputGroup width="50%" >
                    <Input variant="unstyled" placeholder='Search' textAlign="right" fontSize='24px' color="gray.400" />
                <InputRightElement >
                <Icon as={FaSearch}  w={6} h={6} color='gray.400' />
                </InputRightElement >
                </InputGroup>
            </HStack>
            <Card />
        </Box>
    );
}

export default App;

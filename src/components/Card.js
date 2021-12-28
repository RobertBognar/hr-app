import { Heading , Box, Text, Grid, VStack, Image } from '@chakra-ui/react'
import Data from './Data'

console.log(Data)
const Card = () => {
    return (
        <Grid templateColumns='repeat(auto-fill,minmax(250px,1fr))' gap={6}>
            {Data.map((card, id) => {
                return (
                    <VStack key={id} color="white" cursor="pointer" textAlign="left" align="start">
                          <Image
                            // boxSize='100%'
                            w="100%"
                            h="200px"
                            objectFit='cover'
                            src={card.image}
                            alt={card.name}
                        />
                        <Heading>{card.name}</Heading>
                        <Text>{card.state}</Text>
                        <Text px="5px" borderRadius="4px" bg="blue.800">{card.city}</Text>
                        <Text>{card.job}</Text>
                    </VStack>
                )
            })}
        </Grid>
    )
}

export default Card

import { Heading, Text, Grid, VStack, Image } from '@chakra-ui/react';
import Data from './Data';

const Card = ({ onClick }) => {
    return (
        <>
            <Grid
                templateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(1, 1fr)',
                    'repeat(2, 1fr)',
                    'repeat(3, 1fr)',
                    'repeat(auto-fill,minmax(350px,1fr))',
                ]}
                gap={6}
                py="50px"
                px={['15px', '75px', '75px', '75px']}
            >
                {Data.map((card, id) => {
                    return (
                        <VStack
                            id={card.id}
                            key={card.id}
                            color="white"
                            cursor="pointer"
                            textAlign="left"
                            align="start"
                            mb="50px"
                            border="1px"
                            borderColor="white"
                            onClick={() => onClick(card)}
                        >
                            <Image
                                w="100%"
                                h="450px"
                                objectFit="cover"
                                src={card.image}
                                alt={card.name}
                            />
                            <Heading pl="10px" pt="10px">
                                {card.name}
                            </Heading>
                            <Text pl="10px">{card.state}</Text>
                            <Text px="10px" borderRadius="4px" bg="blue.800">
                                {card.city}
                            </Text>
                            <Text pl="10px">{card.job}</Text>
                            <Text pl="10px" pb="10px">
                                Joined: {card.joined}
                            </Text>
                        </VStack>
                    );
                })}
            </Grid>
        </>
    );
};

export default Card;

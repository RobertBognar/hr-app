import { Heading, Text, Flex, Image, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Data from '../guest-homepage/Data';

const DetailsModal = () => {
    const { id } = useParams();
    let idFixed = id.slice(1, id.length);

    const singleItem = Data.find((item) => item.id === +idFixed);
    const { name, state, city, job, image, joined, hobbies, petName } =
        singleItem;

    let hobbiesArr = [];
    for (const key in hobbies) {
        hobbiesArr.push(hobbies[key]);
    }
    const hobbi = hobbiesArr.join(', ');
    return (
        <Flex
            direction="column"
            w="100%"
            className="bgBlack"
            minH="calc(100vh - 42px)"
            color="white"
            p={[
                '10vh 75px 0 75px',
                '10vh 75px 0 75px',
                '10vh 175px 0 175px',
                '10vh 200px 0 200px',
            ]}
        >
            <Flex direction={['column', 'column', 'column', 'row']}>
                <Box
                    w={['100%', '100%', '100%', '50%']}
                    maxHeight="55vh"
                    mb="25px"
                >
                    <Image
                        w="100%"
                        height="100%"
                        maxHeight="55vh"
                        objectFit="cover"
                        src={image}
                        alt={name}
                    />
                </Box>
                <Heading
                    pl={['10px', '10px', '10px', '50px']}
                    pt="10px"
                    w={['100%', '100%', '100%', '50%']}
                >
                    {name}
                </Heading>
            </Flex>
            <Text pl="10px" pt="25px">
                {state}, {city}
            </Text>
            <Text pl="10px" fontWeight="600">
                {job}
            </Text>
            <Text pl="10px">
                {' '}
                <Text as="span" fontWeight="600">
                    Joined:
                </Text>
                &nbsp;
                {joined}
            </Text>
            <Text pl="10px">
                <Text as="span" fontWeight="600">
                    Hobbies:
                </Text>
                &nbsp;
                {hobbi}
            </Text>
            {petName && (
                <Text pl="10px">
                    <Text as="span" fontWeight="600">
                        Pet names:
                    </Text>{' '}
                    &nbsp;
                    {petName}
                </Text>
            )}
            {!petName && (
                <Text pl="10px">
                    <Text as="span" fontWeight="600">
                        No pet
                    </Text>{' '}
                </Text>
            )}
        </Flex>
    );
};

export default DetailsModal;

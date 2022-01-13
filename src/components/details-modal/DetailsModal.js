import {
    Heading,
    Text,
    Flex,
    Image,
    Box,
    Button,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react';

const DetailsModal = ({ onClose, cardDetails }) => {
    const { name, state, city, job, image, joined, hobbies, petName } =
        cardDetails;

    let hobbiesArr = [];
    for (const key in hobbies) {
        hobbiesArr.push(hobbies[key]);
    }
    const hobbi = hobbiesArr.join(', ');

    return (
        <>
            <ModalOverlay />
            <ModalContent
                color="white"
                bg="black"
                border="1px"
                borderColor="white"
                p={['0', '0', '25px', '25px']}
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
                            borderRadius="5px"
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

                <Button
                    colorScheme="black"
                    mr={3}
                    color="black"
                    bg="white"
                    mt="30px"
                    onClick={onClose}
                >
                    Back
                </Button>
            </ModalContent>
        </>
    );
};

export default DetailsModal;

import { Container, Text, Image, Flex, Button, Box } from '@chakra-ui/react';
import { useState } from 'react';

const Members = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Miladin Popadic',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            joined: 'Jan 23rd, 2021',
        },
        {
            id: 2,
            name: 'Slavko Bucanovic',
            image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            joined: 'Aug 18th, 2020',
        },
        {
            id: 3,
            name: 'Ratibor Popovic',
            image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            joined: 'Dec 30th, 2017',
        },
        {
            id: 4,
            name: 'Svetozar Slavkovic',
            image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            joined: 'Nov 3rd, 2015',
        },
        {
            id: 5,
            name: 'Verica Visekruna',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            joined: 'Sep 23rd, 2021',
        },
        {
            id: 6,
            name: 'Svetlana Peric',
            image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
            joined: 'May 21st, 2018',
        },
    ];

    const [members, setMembers] = useState(teamMembers);

    const handleDelete = (id) => {
        const newMembers = members.filter((member) => {
            return member.id !== id;
        });
        setMembers(newMembers);
    };

    return (
        <Container
            display="flex"
            justifyContent="center"
            gap={10}
            flexWrap="wrap"
            m="37px auto"
            w="100%"
            maxW={{ base: '90vw', sm: '100vw', lg: '90vw', xl: '80vw' }}
        >
            {members.map((card) => {
                return (
                    <Box
                        key={card.id}
                        color="black"
                        cursor="pointer"
                        mb="50px"
                        border="1px"
                        borderColor="#000000"
                        p={5}
                        w="292px"
                        h="319px"
                        background=" #F2F2F2"
                    >
                        <Image
                            width="248px"
                            height="161px"
                            objectFit="cover"
                            src={card.image}
                            alt={card.name}
                        />

                        <Flex justifyContent="space-between">
                            <Text
                                mt={5}
                                fontSize="16px"
                                lineHeight="18px"
                                fontWeight="bold"
                            >
                                {card.name}
                            </Text>

                            <Button
                                background="#7B7B7B"
                                color="white"
                                fontStyle=" normal"
                                fontWeight="normal"
                                fontSize="16px"
                                lineHeight="18px"
                                border=" 2px solid #7B7B7B"
                                borderRadius="32px"
                                mt={5}
                                p="6px 16px 6px 16px"
                                w="97px"
                                h="30px"
                            >
                                Published
                            </Button>
                        </Flex>

                        <Text
                            mt="-8px"
                            mb={8}
                            fontSize="12px"
                            lineHeight="14px"
                            letterSpacing="0.04em"
                        >
                            Joined {card.joined}
                        </Text>

                        <Flex justifyContent="space-between">
                            <Button
                                fontWeight="bold"
                                fontSize="16px"
                                lineHeight="18px"
                                color="#000000"
                                w="75px"
                                h="30px"
                                p="6px 24px 6px 24px"
                                borderRadius="4px"
                                background="#FFFFFF"
                                border="2px solid #000000"
                            >
                                Edit
                            </Button>

                            <Button
                                fontWeight="bold"
                                fontSize="16px"
                                lineHeight="18px"
                                color="#000000"
                                w="91px"
                                h="30px"
                                p="6px 24px 6px 24px"
                                borderRadius="4px"
                                background="#FFFFFF"
                                border="2px solid #000000"
                                onClick={() => handleDelete(card.id)}
                            >
                                Delete
                            </Button>
                        </Flex>
                    </Box>
                );
            })}
        </Container>
    );
};

export default Members;

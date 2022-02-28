import { Text, Image, Flex, Button, Box } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

const PendingCard = ({ card, handleDelete }) => {
    const navigate = useNavigate();

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
                src={
                    'https://uteam-api-7nngy.ondigitalocean.app' +
                    card.attributes?.profilePhoto?.data?.attributes?.url
                }
                alt={card.name}
            />

            <Flex justifyContent="space-between">
                <Text
                    mt={5}
                    fontSize="16px"
                    lineHeight="18px"
                    fontWeight="bold"
                >
                    {card.attributes.name}
                </Text>

                <Text
                    background="#7B7B7B"
                    color="white"
                    fontStyle=" normal"
                    fontWeight="normal"
                    fontSize="16px"
                    lineHeight="18px"
                    border=" 2px solid #7B7B7B"
                    borderRadius="32px"
                    mt={5}
                    textAlign="center"
                    pt={1}
                    w="97px"
                    h="30px"
                >
                    {card.attributes.status}
                </Text>
            </Flex>
            <Text
                mt="-8px"
                mb={8}
                fontSize="12px"
                lineHeight="14px"
                letterSpacing="0.04em"
            >
                Joined {card.attributes.createdAt}
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
                    onClick={() =>
                        navigate(`/pendingforapproval/${card.id}/edit`)
                    }
                >
                    Details
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
};

export default PendingCard;

import { Flex, Heading, Image, Text } from '@chakra-ui/react';

const SubmitHeader = () => {
    return (
        <Flex pl="128px">
            <Heading boxSize="40">
                <Image
                    src="https://media-exp1.licdn.com/dms/image/C4E0BAQHiqF9IbmPjCA/company-logo_200_200/0/1617632593865?e=2159024400&v=beta&t=aQbwO7NA8rz7MAoUWODZdy8P2SX2TD4uyHOaa_lhhCE"
                    alt="Quantox Team"
                />
            </Heading>
            <Text
                mt="80px"
                fontSize="32px"
                fontWeight="extrabold"
                color="white"
            >
                Quantox's Team
            </Text>
        </Flex>
    );
};

export default SubmitHeader;

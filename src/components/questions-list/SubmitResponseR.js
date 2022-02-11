import React from 'react';
import { Heading, Text, Flex, Image } from '@chakra-ui/react';

const SubmitResponseR = () => {
    return (
        <Flex
            px={['55px', '55px', '155px']}
            direction="column"
            minH="calc(100vh - 42px)"
            mt="32px"
            ml="120px"
        >
            <Flex>
                <Heading>
                    <Image
                        src="https://www.helloworld.rs/public/files/_thumb/200x200/public/company/337/2/quantox%20vertical.png"
                        alt="Quantox Team"
                    />
                </Heading>
                <Text mt="80px" fontSize="32px" fontWeight="extrabold">
                    Quantox's Team
                </Text>
            </Flex>
        </Flex>
    );
};
export default SubmitResponseR;

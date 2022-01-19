import React from 'react';
import Header from './Header';
import BasicInfo from './BasicInfo';
import Answers from './Answers';
import { Box, Flex } from '@chakra-ui/react';

const EditTeam = () => {
    return (
        <Box m="0 auto" className="bgBlack" minH="calc(150vh - 42px)">
            <Header />
            <Flex
                gap={{ base: '100px', sm: '10', md: '10', xl: '165' }}
                justifyContent="center"
                flexWrap="wrap"
                mt={{ base: '50', sm: '40px', md: '20px', lg: '20px' }}
                pb={{ base: '20', sm: '0', md: '0', lg: '0' }}
            >
                <BasicInfo />
                <Answers />
            </Flex>
        </Box>
    );
};

export default EditTeam;

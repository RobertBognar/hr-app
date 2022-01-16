import React from 'react';
import Header from './Header';
import Members from './Members';
import { Box } from '@chakra-ui/react';

const HomepageAuthUser = () => {
    return (
        <Box className="bgBlack" minH="calc(100vh - 42px)" py={34}>
            <Header />
            <Members />
        </Box>
    );
};

export default HomepageAuthUser;

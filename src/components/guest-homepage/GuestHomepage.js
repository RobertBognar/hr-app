import React from 'react';
import Header from './Header';
import Card from './Card';
import { Box } from '@chakra-ui/react';

const GuestHomepage = () => {
    return (
        <Box className="bgBlack" minH="calc(100vh - 42px)">
            <Header />
            <Card />
        </Box>
    );
};

export default GuestHomepage;

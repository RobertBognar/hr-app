import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Tabs = () => {
    return (
        <Box
            w="45vw"
            fontSize="14px"
            fontFamily="Comic Neue"
            display={['none', 'none', 'flex', 'flex']}
            alignItems="center"
            justifyContent="space-around"
        >
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
            <Link to="/profile"> My Account </Link>
        </Box>
    );
};

export default Tabs;

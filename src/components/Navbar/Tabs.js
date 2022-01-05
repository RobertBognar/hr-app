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
            <Link to="/page-one"> Page one </Link>
            <Link to="/page-two"> Page two </Link>
            <Link to="/page-three"> Page three </Link>
        </Box>
    );
};

export default Tabs;

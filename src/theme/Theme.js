//Enabling Comic Neue Font Through Whole Application

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: 'Comic Neue',
        body: 'Comic Neue',
    },
});

export default theme;

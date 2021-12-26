//Enabling Comic Neue Font Through Whole Application

import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
 
})

const theme = extendTheme({
    breakpoints,
    fonts: {
        heading: 'Comic Neue',
        body: 'Comic Neue',
    },
});

export default theme;

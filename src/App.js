import './App.css';

import { Box } from '@chakra-ui/react';

import BasicInfo from './components/BasicInfo';
import Security from './components/Security';

function App() {
    return (
        <div className="App">
            <Box
                display={{ lg: 'flex' }}
                width="full"
                justify={{ base: 'center' }}
                direction={{ base: 'column', md: 'row' }}
                justifyContent="center"
                alignItems="center"
                h="100vh"
                m="0 auto"
            >
                <Box
                    mt={{ base: 4, md: 0, sm: 0 }}
                    ml={{ md: 7 }}
                    mt={{ sm: 2 }}
                    m
                >
                    <BasicInfo />{' '}
                </Box>

                <Box
                    mt={{ base: 4, md: 0, sm: 0 }}
                    ml={{ md: 7 }}
                    mt={{ sm: 2 }}
                >
                    <Security />{' '}
                </Box>
            </Box>
        </div>
    );
}

export default App;

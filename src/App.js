import { BrowserRouter } from 'react-router-dom';

import './App.css';
// import Register from './components/Register';
// import Login from './components/Login/Login';

import { Box } from '@chakra-ui/react';

import BasicInfo from './components/My Profile page/BasicInfo';
import Security from './components/My Profile page/Security';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
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
                    <Box mt={{ base: 4, md: 0, sm: 0 }}>
                        <BasicInfo />
                    </Box>

                    <Box mt={{ base: 4, md: 0, sm: 0 }} ml={{ md: 7 }}>
                        <Security />
                    </Box>
                </Box>
            </BrowserRouter>
        </div>
    );
}

export default App;

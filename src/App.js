import './App.css';

import { Box } from '@chakra-ui/react';

import BasicInfo from './components/my-profile-page/BasicInfo';
import Security from './components/my-profile-page/Security';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/guest-homepage/GuestHomepage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Login />
                <Register />
                <Box
                    display={{ lg: 'flex' }}
                    width="full"
                    justify={{ base: 'center' }}
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent="center"
                    alignItems="center"
                    h="100vh"
                    m="0 auto"
                    gap={10}
                    bg="black"
                    color="white"
                >
                    <BasicInfo />
                    <Security />
                </Box>
                <GuestHomepage />
            </BrowserRouter>
        </div>
    );
}

export default App;

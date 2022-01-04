import BasicInfo from './BasicInfo';
import Security from './Security';
import { Box } from '@chakra-ui/react';

//Creating Separte Profile Page To Implement Both Security & Basic Info Into One Profile Page Route
//Also Applying Box Through Chakra UI As Standard Style For Both Elements
const ProfilePage = () => {
    return (
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
        >
            <BasicInfo />
            <Security />
        </Box>
    );
};

export default ProfilePage;

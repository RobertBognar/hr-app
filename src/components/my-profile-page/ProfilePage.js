import BasicInfo from './BasicInfo';
import Security from './Security';
import { Box } from '@chakra-ui/react';

//Creating Separte Profile Page To Implement Both Security & Basic Info Into One Profile Page Route
//Also Applying Box Through Chakra UI As Standard Style For Both Elements
const ProfilePage = () => {
    return (
        <Box
            className="bgBlack"
            display={{ lg: 'flex' }}
            width="full"
            justify={{ base: 'center' }}
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
            minH="calc(100vh - 42px)"
            m="0 auto"
            gap={10}
            py={{ base: 14, sm: 14, md: 14, lg: 0 }}
        >
            <BasicInfo />
            <Security />
        </Box>
    );
};

export default ProfilePage;

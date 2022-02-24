import { Box, Flex, Heading } from '@chakra-ui/react';
import Answers from './Answers';
import BasicInfo from './BasicInfo';
import EditTeam from './EditTeam';
import Header from './Header';
import ModerateHeader from './ModerateHeader';

const ModerateTeam = () => {
    return (
        <div>
            <Box m="0 auto" className="bgBlack" minH="calc(150vh - 42px)">
                <ModerateHeader />
                <Flex
                    gap={{ base: '100px', sm: '10', md: '10', xl: '165' }}
                    justifyContent="center"
                    flexWrap="wrap"
                    mt={{ base: '50', sm: '40px', md: '20px', lg: '20px' }}
                    pb={{ base: '20', sm: '0', md: '0', lg: '0' }}
                >
                    <BasicInfo />
                    <Answers />
                </Flex>
            </Box>
        </div>
    );
};

export default ModerateTeam;

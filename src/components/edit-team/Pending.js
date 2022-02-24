import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import profile from '../../services/ProfileService';
import MemberCard from '../homepage-authuser/MemberCard';
import PendingCard from './PendingCard';

const Pending = () => {
    const [members, setMembers] = useState([]);

    async function getProfile() {
        const profiles = await profile.getProfilesByStatus();
        setMembers(profiles);
        console.log(profiles);
    }

    async function handleDelete(id) {
        await profile.deleteProfile(id);
        getProfile();
    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div>
            <Box className="bgBlack" minH="calc(100vh - 42px)" py={34}>
                <Heading
                    fontWeight="bold"
                    fontSize="28px"
                    lineHeight="32px"
                    letterSpacing="0.04em"
                    color="white"
                    fontFamily="Comic Neue"
                    ml="8em"
                >
                    Pending For Approval
                </Heading>
                <Container
                    className="bgBlack"
                    display="flex"
                    justifyContent="center"
                    gap={10}
                    flexWrap="wrap"
                    m="37px auto"
                    w="100%"
                    maxW={{ base: '82vw', sm: '100vw', lg: '90vw', xl: '80vw' }}
                >
                    {members.map((card, id) => {
                        return (
                            <PendingCard
                                card={card}
                                handleDelete={handleDelete}
                                key={id}
                            />
                        );
                    })}
                </Container>
            </Box>
        </div>
    );
};

export default Pending;

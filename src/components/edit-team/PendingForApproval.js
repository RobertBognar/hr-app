import { Container, Heading, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import PendingMemberCard from './PendingMemberCard';
import profile from '../../services/ProfileService';

const PendingForApproval = () => {
    const [members, setMembers] = useState([]);

    async function handleDelete(id) {
        await profile.deleteProfile(id);
        showProfiles();
    }
    async function showProfiles() {
        const profiles = await profile.getProfilesByStatus();

        setMembers(profiles);
        console.log(profiles);
    }

    useEffect(() => {
        showProfiles();
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
                    display={'flex'}
                    justifyContent={'center'}
                >
                    Pending for approval
                </Heading>
                <Container
                    display="flex"
                    justifyContent="center"
                    gap={10}
                    flexWrap="wrap"
                    m="37px auto"
                    w="100%"
                    maxW={{ base: '82vw', sm: '100vw', lg: '90vw', xl: '80vw' }}
                    alignContent={'center'}
                >
                    {members.map((card, id) => {
                        return (
                            <PendingMemberCard
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

export default PendingForApproval;
